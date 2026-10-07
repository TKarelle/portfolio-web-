/**
 * Stockage des leads quiz.
 *
 * - Local : data/quiz-leads.xls
 * - Vercel : email via Web3Forms (gratuit) → Gmail + log stdout
 * - Optionnel : QUIZ_LEADS_WEBHOOK_URL (Discord)
 *
 * Clé gratuite : https://web3forms.com → Access Key → var WEB3FORMS_ACCESS_KEY
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { CONTACT_EMAIL } from "@/data/site";

export type QuizLead = {
  name: string;
  email: string;
  createdAt: string;
};

function resolveLeadsFile(): string {
  // Sur Vercel, process.cwd() = /var/task (EROFS). /tmp est writable.
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return path.join("/tmp", "kopio-quiz-leads.xls");
  }
  return path.join(process.cwd(), "data", "quiz-leads.xls");
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cell(value: string): string {
  return `<Cell><Data ss:Type="String">${escapeXml(value)}</Data></Cell>`;
}

function buildWorkbook(leads: QuizLead[]): string {
  const header = `<Row>${cell("Date")}${cell("Nom")}${cell("Email")}</Row>`;
  const rows = leads
    .map(
      (lead) =>
        `<Row>${cell(lead.createdAt)}${cell(lead.name)}${cell(lead.email)}</Row>`,
    )
    .join("");

  return `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Worksheet ss:Name="Leads quiz">
  <Table>
   ${header}
   ${rows}
  </Table>
 </Worksheet>
</Workbook>
`;
}

function parseExisting(xml: string): QuizLead[] {
  const leads: QuizLead[] = [];
  const rowRe = /<Row>([\s\S]*?)<\/Row>/g;
  let rowIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = rowRe.exec(xml)) !== null) {
    rowIndex += 1;
    if (rowIndex === 1) continue;

    const cells: string[] = [];
    const cellRe = /<Data[^>]*>([\s\S]*?)<\/Data>/g;
    let cellMatch: RegExpExecArray | null;
    while ((cellMatch = cellRe.exec(match[1])) !== null) {
      cells.push(
        cellMatch[1]
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, "&"),
      );
    }

    if (cells.length >= 3) {
      leads.push({
        createdAt: cells[0],
        name: cells[1],
        email: cells[2],
      });
    }
  }

  return leads;
}

export function getLeadsFilePath(): string {
  return resolveLeadsFile();
}

/** Envoie le lead dans Gmail via Web3Forms (0 €, API serveur OK — pas de Cloudflare). */
async function notifyEmail(lead: QuizLead): Promise<boolean> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    console.warn(
      "[quiz-leads] WEB3FORMS_ACCESS_KEY manquante — lead visible dans les logs uniquement",
    );
    return false;
  }

  const to = (process.env.QUIZ_LEADS_EMAIL ?? CONTACT_EMAIL).trim();

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Kopio] Lead quiz — ${lead.name}`,
        from_name: "Kopio Quiz",
        name: lead.name,
        email: lead.email,
        replyto: lead.email,
        message: `Nouveau lead quiz Kopio\n\nNom : ${lead.name}\nEmail : ${lead.email}\nDate : ${lead.createdAt}`,
        to,
      }),
    });
    const data = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;
    if (!res.ok || data?.success === false) {
      console.error("[quiz-leads] web3forms", res.status, data);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[quiz-leads] email failed", err);
    return false;
  }
}

async function notifyWebhook(lead: QuizLead): Promise<void> {
  const url = process.env.QUIZ_LEADS_WEBHOOK_URL?.trim();
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `Nouveau lead quiz Kopio : **${lead.name}** — ${lead.email}`,
        embeds: [
          {
            title: "Lead quiz",
            fields: [
              { name: "Nom", value: lead.name, inline: true },
              { name: "Email", value: lead.email, inline: true },
              { name: "Date", value: lead.createdAt, inline: false },
            ],
          },
        ],
        name: lead.name,
        email: lead.email,
        createdAt: lead.createdAt,
        source: "kopio-quiz",
      }),
    });
  } catch (err) {
    console.error("[quiz-leads] webhook failed", err);
  }
}

export async function appendQuizLead(
  lead: Omit<QuizLead, "createdAt">,
): Promise<{
  path: string;
  total: number;
  persisted: boolean;
}> {
  const filePath = resolveLeadsFile();
  const entry: QuizLead = {
    name: lead.name.trim(),
    email: lead.email.trim(),
    createdAt: new Date().toISOString(),
  };

  // Toujours tracer en logs Vercel (récupération manuelle, 0 €)
  console.info(
    JSON.stringify({
      type: "quiz_lead",
      name: entry.name,
      email: entry.email,
      createdAt: entry.createdAt,
    }),
  );

  let existing: QuizLead[] = [];
  let persisted = false;

  try {
    await mkdir(path.dirname(filePath), { recursive: true });
    try {
      const raw = await readFile(filePath, "utf8");
      existing = parseExisting(raw);
    } catch {
      existing = [];
    }

    const emailNorm = entry.email.toLowerCase();
    const already = existing.some(
      (l) => l.email.trim().toLowerCase() === emailNorm,
    );

    if (!already) {
      existing.push(entry);
      await writeFile(filePath, buildWorkbook(existing), "utf8");
    }
    persisted = true;
  } catch (err) {
    // EROFS ou autre : le lead est déjà dans stdout ; ne pas faire échouer le quiz
    console.error("[quiz-leads] file persist skipped", err);
    existing = [entry];
  }

  const emailed = await notifyEmail(entry);
  await notifyWebhook(entry);

  return {
    path: filePath,
    total: existing.length,
    persisted: persisted || emailed,
  };
}

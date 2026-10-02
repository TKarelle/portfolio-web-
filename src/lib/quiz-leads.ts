/**
 * Stockage local des leads quiz en SpreadsheetML (.xls ouvre dans Excel).
 * Fichier : data/quiz-leads.xls (gitignored).
 *
 * Note déploiement : sur Vercel (filesystem éphémère) le fichier ne persiste
 * pas entre invocations. En local / VPS Node, le fichier s’accumule correctement.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type QuizLead = {
  name: string;
  email: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "quiz-leads.xls");

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
    if (rowIndex === 1) continue; // header

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
  return LEADS_FILE;
}

export async function appendQuizLead(lead: Omit<QuizLead, "createdAt">): Promise<{
  path: string;
  total: number;
}> {
  await mkdir(DATA_DIR, { recursive: true });

  let existing: QuizLead[] = [];
  try {
    const raw = await readFile(LEADS_FILE, "utf8");
    existing = parseExisting(raw);
  } catch {
    existing = [];
  }

  const emailNorm = lead.email.trim().toLowerCase();
  const already = existing.some((l) => l.email.trim().toLowerCase() === emailNorm);

  if (!already) {
    existing.push({
      name: lead.name.trim(),
      email: lead.email.trim(),
      createdAt: new Date().toISOString(),
    });
    await writeFile(LEADS_FILE, buildWorkbook(existing), "utf8");
  }

  return { path: LEADS_FILE, total: existing.length };
}

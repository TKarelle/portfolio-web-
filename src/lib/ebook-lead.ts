import {
  EBOOK_GATE_ID,
  EBOOK_STORAGE_KEY,
} from "@/data/ebook-coach";

export type EbookGateState = { name: string; email: string };

export function readEbookGate(): EbookGateState | null {
  try {
    const raw = sessionStorage.getItem(EBOOK_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as EbookGateState;
    if (
      typeof parsed?.name === "string" &&
      typeof parsed?.email === "string" &&
      parsed.name.length >= 2
    ) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function writeEbookGate(gate: EbookGateState) {
  sessionStorage.setItem(EBOOK_STORAGE_KEY, JSON.stringify(gate));
}

export async function submitEbookLead(
  name: string,
  email: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      ok: false,
      message: "Configuration email manquante. Réessayez plus tard.",
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `[Kopio] Préinscription ebook coach : ${name}`);
  formData.append("from_name", "Kopio Blog");
  formData.append("name", name);
  formData.append("email", email);
  formData.append(
    "message",
    `Préinscription ebook coachs - valoriser sans exposer\n\nGate : ${EBOOK_GATE_ID}\nNom : ${name}\nEmail : ${email}\nDate : ${new Date().toISOString()}`,
  );
  formData.append("botcheck", "");

  const w3 = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const w3Data = (await w3.json()) as {
    success?: boolean;
    message?: string;
  };
  if (!w3.ok || !w3Data.success) {
    return {
      ok: false,
      message: w3Data.message ?? "Envoi impossible. Réessayez.",
    };
  }

  void fetch("/api/quiz-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, source: EBOOK_GATE_ID }),
  }).catch(() => {});

  return { ok: true };
}

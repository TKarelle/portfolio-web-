import { NextResponse } from "next/server";
import { appendQuizLead } from "@/lib/quiz-leads";

export const runtime = "nodejs";

type Body = {
  name?: unknown;
  email?: unknown;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Indiquez votre nom" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  try {
    const result = await appendQuizLead({ name, email });
    return NextResponse.json({ ok: true, total: result.total });
  } catch (err) {
    console.error("[quiz-leads]", err);
    return NextResponse.json(
      {
        error:
          "Impossible d'enregistrer pour le moment. Réessayez dans un instant.",
      },
      { status: 500 },
    );
  }
}

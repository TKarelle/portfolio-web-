import { NextResponse } from "next/server";
import { LEAD_EMAIL_MAX, LEAD_NAME_MAX } from "@/lib/lead-limits";
import { appendQuizLead } from "@/lib/quiz-leads";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

type Body = {
  name?: unknown;
  email?: unknown;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clientIp(request: Request): string {
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 64);
  const first = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (first || "unknown").slice(0, 64);
}

function allowRequest(ip: string): boolean {
  const now = Date.now();
  if (buckets.size > 2000) {
    for (const [key, bucket] of buckets) {
      if (bucket.reset <= now) buckets.delete(key);
    }
  }
  const current = buckets.get(ip);
  if (!current || current.reset <= now) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_HITS) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  if (!allowRequest(clientIp(request))) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Corps invalide" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (name.length < 2 || name.length > LEAD_NAME_MAX) {
    return NextResponse.json({ error: "Indiquez votre nom" }, { status: 400 });
  }
  if (email.length > LEAD_EMAIL_MAX || !isValidEmail(email)) {
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

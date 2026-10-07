import { NextRequest, NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";

export const runtime = "nodejs";

/**
 * POST /api/indexnow
 * Body: { "urls": ["https://www.kopio.eu/..."] }
 * Auth: Authorization: Bearer $INDEXNOW_SECRET
 *
 * Sem.4 — gratuit. Ne pas exposer sans secret.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.INDEXNOW_SECRET?.trim();
  if (!secret) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET non configuré" },
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let urls: string[] = [];
  try {
    const body = (await req.json()) as { urls?: unknown };
    if (Array.isArray(body.urls)) {
      urls = body.urls.filter((u): u is string => typeof u === "string");
    }
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  try {
    const results = await submitIndexNow(urls);
    const ok = results.every((r) => r.ok);
    return NextResponse.json({ ok, results }, { status: ok ? 200 : 502 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "IndexNow failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

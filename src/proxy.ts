import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { classifyPath, detectBot } from "@/lib/bot-crawl";

/**
 * Traçage UA bots (logs stdout uniquement).
 * Visible dans Vercel → Logs.
 * Désactiver : BOT_CRAWL_LOG=0
 *
 * Ne protège aucune page : l'authentification ne passe pas par ici.
 */
export function proxy(req: NextRequest) {
  if (process.env.BOT_CRAWL_LOG === "0") {
    return NextResponse.next();
  }

  const ua = req.headers.get("user-agent") ?? "";
  const bot = detectBot(ua);
  if (!bot) {
    return NextResponse.next();
  }

  const path = req.nextUrl.pathname;
  console.info(
    JSON.stringify({
      type: "bot_hit",
      bot,
      class: classifyPath(path),
      path,
      method: req.method,
      ts: new Date().toISOString(),
    }),
  );

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Tout sauf assets immutables Next / fichiers image lourds.
     * On veut quand même voir /api/* (waste) et les pages HTML.
     */
    "/((?!_next/static|_next/image|image/|favicon\\.svg|.*\\.(?:mp4|vtt|png|jpg|jpeg|webp|avif|svg|ico)$).*)",
  ],
};

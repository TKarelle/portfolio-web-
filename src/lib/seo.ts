import { SITE_URL } from "@/data/site";

export function getBaseUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

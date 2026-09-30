import { ImageResponse } from "next/og";
import { BRAND_NAME, BRAND_SIGNATURE } from "@/data/site";

export const alt = "Kopio, création de site web pour femme entrepreneuse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f4f2ff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -60,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(255, 31, 113, 0.22)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -40,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "rgba(212, 255, 0, 0.28)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#0a0a0a",
              color: "#d4ff00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 800, color: "#0a0a0a" }}>
            {BRAND_NAME}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              letterSpacing: -1,
            }}
          >
            Création de site web pour femme entrepreneuse
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#4b5563",
              lineHeight: 1.35,
            }}
          >
            {BRAND_SIGNATURE} Dès 89 €/mois, hébergement inclus.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#ff1f71",
              color: "#fff",
              fontSize: 22,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 999,
              border: "3px solid #0a0a0a",
            }}
          >
            Dès 89 €/mois
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: "#0a0a0a" }}>
            www.kopio.eu
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

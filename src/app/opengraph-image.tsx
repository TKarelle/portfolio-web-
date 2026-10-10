import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BRAND_NAME, BRAND_SIGNATURE } from "@/data/site";

export const alt =
  "Kopio — site web pour professionnelles de l'accompagnement, mockups laptop tablette téléphone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const mockupData = await readFile(
    join(process.cwd(), "public/image/og-mockup.jpg"),
  );
  const mockupSrc = `data:image/jpeg;base64,${Buffer.from(mockupData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f4f2ff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: "rgba(255, 31, 113, 0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -40,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(124, 58, 237, 0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: "40%",
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "rgba(254, 235, 2, 0.12)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "48px 52px",
            gap: 36,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 20,
              width: 440,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#0a0a0a",
                  color: "#d4ff00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 800,
                }}
              >
                K
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#0a0a0a",
                }}
              >
                {BRAND_NAME}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 40,
                fontWeight: 800,
                lineHeight: 1.12,
                color: "#0a0a0a",
                letterSpacing: -1,
              }}
            >
              Votre site professionnel, sans la charge mentale.
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 600,
                color: "#4b5563",
                lineHeight: 1.35,
              }}
            >
              {BRAND_SIGNATURE} Pour coachs, thérapeutes et consultantes.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "#ff1f71",
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 700,
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "3px solid #0a0a0a",
                }}
              >
                Visibilité digitale
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0a0a0a",
                }}
              >
                www.kopio.eu
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                background: "#F3F1FC",
                borderRadius: 28,
                padding: 12,
                boxShadow:
                  "0 4px 8px rgba(17,17,17,0.08), 0 20px 48px rgba(17,17,17,0.16)",
                width: 620,
              }}
            >
              <img
                src={mockupSrc}
                alt=""
                width={900}
                height={506}
                style={{
                  width: 596,
                  height: 335,
                  borderRadius: 16,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

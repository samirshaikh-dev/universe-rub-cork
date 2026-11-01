import { ImageResponse } from "next/og";

export const alt =
  "United Rubber Cork — Precision cork and rubberised cork gaskets engineered to your drawing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#0c1712",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 8,
            background: "#133a2d",
            border: "1px solid #d4954d",
            color: "#d4954d",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          URC
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "#ffffff", display: "flex", fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px" }}>
            UNITED RUBBER CORK
          </div>
          <div style={{ color: "#d4954d", display: "flex", fontSize: 14, fontWeight: 600, letterSpacing: "1px" }}>
            PRECISION GASKETS &amp; CORK SOLUTIONS
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            color: "#ffffff",
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Precision Cork &amp; Rubberised Cork Gaskets.
        </div>
        <div style={{ color: "#d4954d", display: "flex", fontSize: 32, fontWeight: 700 }}>
          Cut to Your Drawing • IS 4253 Part II Certified Basis
        </div>
        <div style={{ color: "#a0aba5", display: "flex", fontSize: 22 }}>
          Supplying Power Transformers, Automotive &amp; High-Pressure Flange Assemblies.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: 24,
        }}
      >
        <div style={{ color: "#ffffff", display: "flex", fontSize: 18, fontWeight: 600 }}>
          Direct Works: GIDC Vapi, Gujarat, India
        </div>
        <div style={{ color: "#d4954d", display: "flex", fontSize: 18, fontWeight: 700 }}>
          ISO 9001:2015 System Listed
        </div>
      </div>
    </div>,
    size
  );
}

import { ImageResponse } from "next/og";

export const alt =
  "United Rubber Cork — cork and rubberised cork products made to specification";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#EEF0EB",
        color: "#232826",
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
          color: "#1E3B2F",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
          UNITED
        </div>
        <div style={{ display: "flex", fontSize: 18, fontWeight: 400 }}>
          RUBBER CORK
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            color: "#1E3B2F",
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          Cork and rubberised cork
        </div>
        <div style={{ color: "#232826", display: "flex", fontSize: 30 }}>
          Made for industrial, construction and decorative applications.
        </div>
      </div>
      <div style={{ color: "#1E3B2F", display: "flex", fontSize: 22 }}>
        GIDC, Vapi, Gujarat, India
      </div>
    </div>,
    size,
  );
}

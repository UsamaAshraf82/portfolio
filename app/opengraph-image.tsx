import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";
import { seo } from "@/data/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1020",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#a78bfa",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>{personal.initials}</span>
          <span>{personal.title}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              width: "850px",
              color: "rgba(255,255,255,0.72)",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            {seo.description}
          </div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.46)", fontSize: 24 }}>{seo.url}</div>
      </div>
    ),
    size
  );
}

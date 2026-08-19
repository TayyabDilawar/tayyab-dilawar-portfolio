import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
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
          background: "#000000",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            color: "#0ea5e9",
            textTransform: "uppercase",
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              backgroundImage: "linear-gradient(135deg, #0ea5e9, #6366f1, #d946ef)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 860 }}>
            {profile.summary}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

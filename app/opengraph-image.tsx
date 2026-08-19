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
          background: "#09090b",
          color: "#f4f4f5",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#2dd4bf" }}>
          {profile.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 600 }}>{profile.name}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 860 }}>
            {profile.summary}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

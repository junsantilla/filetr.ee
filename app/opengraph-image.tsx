import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Filetr.ee - Developer Folder & File Structures";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const title = "Filetr.ee";
  const description = "Developer Folder & File Structures";
  const statsText = [
    "40+ Programming Languages & Frameworks",
    "Open Source & Community Driven",
    "Scalable Project Structures",
  ].join("\n");

  const textColor = "#ffffff";
  const leftPadding = "100px";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          backgroundColor: "#fff",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Header Section - Purple to Blue Gradient */}
        <div
          style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: leftPadding,
            color: textColor,
          }}
        >
          <div style={{ fontSize: "60px", fontWeight: "bold" }}>
            🌳 {title}
          </div>
          <div
            style={{
              fontSize: "28px",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom Section - Dark Background */}
        <div
          style={{
            backgroundColor: "#0f172a",
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: leftPadding,
            color: "#fff",
            position: "relative",
          }}
        >
          {/* Decorative Code Icon */}
          <div
            style={{
              position: "absolute",
              right: "50px",
              bottom: "50px",
              fontSize: "200px",
              opacity: 0.1,
            }}
          >
            📁
          </div>

          {/* Stats Text */}
          <div
            style={{
              fontSize: "30px",
              lineHeight: "50px",
              whiteSpace: "pre-line",
              fontWeight: "500",
            }}
          >
            {statsText}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
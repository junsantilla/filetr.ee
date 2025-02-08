import { ImageResponse } from "next/og";

export const runtime = "edge"; // Optimized for Edge API

export async function GET() {
	// 🔥 Static Hardcoded Data
	const title = "Filetr.ee";
	const description = "Developer Folder & File Structures";
	const statsText = [
		"Open Source",
		"Community Driven Content",
		"Continuously Updated",
	].join("\n"); // Converts array to text with line breaks

	// **GitHub-Themed Background Color**
	const textColor = "#ffffff"; // White text for contrast
	const leftPadding = "100px"; // Consistent padding on left side

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
				{/* 🔥 HEADER - GitHub Dark Color with Left-Aligned White Text */}
				<div
					style={{
						backgroundColor: "#1a1a1a",
						height: "40%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						paddingLeft: leftPadding,
						color: textColor,
					}}
				>
					<div style={{ fontSize: "60px", fontWeight: "bold" }}>
						{title}
					</div>
					<div
						style={{
							fontSize: "28px",
							marginTop: "10px",
							fontWeight: "bold",
						}}
					>
						{description}
					</div>
				</div>

				{/* 🔥 BOTTOM BLACK SECTION */}
				<div
					style={{
						backgroundColor: "#000",
						height: "60%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						paddingLeft: leftPadding,
						color: "#fff",
						position: "relative",
					}}
				>
					{/* 🔥 White GitHub SVG Icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="250"
						height="250"
						fill="white"
						style={{
							position: "absolute",
							right: "50px",
							bottom: "50px",
							opacity: 0.1, // Faded effect
						}}
					>
						<path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.799 8.207 11.385.6.111.793-.261.793-.579 0-.285-.01-1.041-.015-2.045-3.338.724-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.728.083-.728 1.205.084 1.84 1.239 1.84 1.239 1.07 1.834 2.805 1.304 3.49.997.107-.776.419-1.304.76-1.604-2.665-.304-5.466-1.334-5.466-5.933 0-1.311.469-2.381 1.236-3.221-.123-.304-.536-1.521.117-3.171 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.398 3.005-.403 1.02.005 2.048.137 3.005.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.65.24 2.867.118 3.171.768.84 1.235 1.91 1.235 3.221 0 4.609-2.805 5.625-5.478 5.921.43.37.814 1.101.814 2.221 0 1.604-.015 2.896-.015 3.289 0 .32.193.694.798.578C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
					</svg>

					{/* 🔥 Static Text for Stats */}
					<div
						style={{
							fontSize: "30px",
							lineHeight: "50px",
							whiteSpace: "pre-line",
						}}
					>
						{statsText}
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

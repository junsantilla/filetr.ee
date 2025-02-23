import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
	title: "Filetr.ee - Developer Folder & File Structures",
	description:
		"Curated folder structures for programming languages and frameworks at filetr.ee",
};

const isLocalhost = process.env.NODE_ENV === "development";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="G-VSX61LB6TV" />
			<body
				className={`${GeistSans.className} antialiased min-h-screen flex flex-col`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<AnnouncementBar />
					<Navigation />
					<main className="flex-grow">{children}</main>
					<Footer />
				</ThemeProvider>
				{!isLocalhost && <Analytics />}
			</body>
		</html>
	);
}

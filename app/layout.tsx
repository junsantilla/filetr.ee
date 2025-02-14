import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

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
		<html lang="en" className="dark">
			<body
				className={`${GeistMono.className} antialiased min-h-screen flex flex-col`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
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

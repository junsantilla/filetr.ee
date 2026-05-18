import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { AnalyticsGate } from "@/components/analytics-gate";

export const metadata: Metadata = {
	title: "Filetr.ee - Developer Folder & File Structures",
	description:
		"Curated folder structures for programming languages and frameworks at filetr.ee",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${GeistSans.className} antialiased min-h-screen flex flex-col`}
				suppressHydrationWarning
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
					<CookieBanner />
					<Footer />
				</ThemeProvider>
				{process.env.NODE_ENV === "production" && <AnalyticsGate />}
			</body>
		</html>
	);
}

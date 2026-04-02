import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/config/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${fontSans.variable} ${fontMono.variable} min-h-screen font-sans antialiased`}
			>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}

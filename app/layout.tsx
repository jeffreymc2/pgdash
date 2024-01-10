// import type { Metadata } from "next";
// import { Jost } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Toaster } from "@/components/ui/toaster";

// const jost = Jost({
// 	subsets: ["latin"],
// 	weight: ["100", "300", "400", "500", "700", "900"],
// });

// export const metadata: Metadata = {
// 	metadataBase: new URL("https://daily-todo-task.vercel.app/"),

// 	title: {
// 		template: "%s | Daily Todo",
// 		default: "Daily Todo",
// 	},
// 	authors: {
// 		name: "chensokheng",
// 	},
// 	description:
// 		"Build dashboard with role managemanet using next.js and supabase.",
// 	openGraph: {
// 		title: "Daily Todo",
// 		description: "Build dashboard with next.js and supabase ",
// 		url: "https://daily-todo-task.vercel.app/",
// 		siteName: "Daily Todo",
// 		images: "/og.png",
// 		type: "website",
// 	},
// 	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
// };

// export default function RootLayout({
// 	children,
// }: {
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<html lang="en" suppressHydrationWarning>
// 			<body className={`${jost.className} antialiased dark:bg-[#09090B]`}>
// 				<ThemeProvider
// 					attribute="class"
// 					defaultTheme="dark"
// 					enableSystem
// 					disableTransitionOnChange
// 				>
// 					<main className="">{children}</main>
// 					<Toaster />
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	);
// }

import { Flowbite, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { customTheme } from "./theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Perfect Game Rewards Dashboard",
  description:
    "PG Rewards.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <ThemeModeScript />
      </head>
      <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}

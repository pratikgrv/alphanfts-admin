import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/provider/theme-provider";
import { AuthProvider } from "@/provider/auth-provider";



import "@/styles/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "zenl admin",
	description: "the admin dashboard page for ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {


	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AuthProvider>{children}</AuthProvider>
				</ThemeProvider>
				<Toaster richColors />
			</body>
		</html>
	);
}

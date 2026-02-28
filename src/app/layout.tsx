import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AR Siddiqui | Business Systems Consultant",
  description: "Portfolio of AR Siddiqui, Business Systems Consultant, Workflow Automation Specialist, AI & Software Engineer, Head of Department, CTO.",
  keywords: "Business Systems Consultant, Workflow Automation, AI Engineer, CTO, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

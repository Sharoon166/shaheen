import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LucideCode2 } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SENSAI - Your AI career mentor",
  description: "Your personalized AI career guidance platform. Get tailored advice, resources, and support to navigate your career path with confidence.",
  keywords: "AI, career, mentor, guidance, resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="font-mono p-4">
            Made with <LucideCode2 className="inline" /> by <a href="https://sharoon.vercel.app" target="_blank" rel="noreferrer" className="underline-offset-4 underline ">Sharoon</a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

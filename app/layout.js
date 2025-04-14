import { Recursive } from "next/font/google";
import "./globals.css";
import { LucideCode2 } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata = {
  title: "Shaheen - Your AI career mentor",
  description: "Your personalized AI career guidance platform. Get tailored advice, resources, and support to navigate your career path with confidence.",
  keywords: "AI, career, mentor, guidance, resources, Shaheen",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${recursive.variable} antialiased font-recursive bg-background text-foreground min-h-screen flex flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <footer className="font-mono text-sm p-4 bg-muted/30">
              <div className="container mx-auto">
                <p>
                  Made with <LucideCode2 className="inline" /> by <a href="https://sharoon.vercel.app" target="_blank" rel="noreferrer" className="underline-offset-4 underline ">Sharoon</a>

                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

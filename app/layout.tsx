import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ULockAI | Enterprise AI Security & Solutions",
  description:
    "ULockAI is an enterprise-grade AI Security SDK that protects LLMs, AI Agents, and SLMs from Prompt Injection, Memory Poisoning, and API Misuse — sub-millisecond, developer-first.",
  keywords: [
    "AI Security",
    "Prompt Injection",
    "LLM Security",
    "AI Agent Security",
    "ULockAI",
    "AI SDK",
    "Web Development",
    "LinkedIn Branding",
    "Resume Building",
  ],
  openGraph: {
    title: "ULockAI | Your AI's First Line of Defense",
    description:
      "Lightweight AI Security SDK — protect your LLMs and AI Agents in minutes.",
    url: "https://ulockai.github.io/ulockai",
    siteName: "ULockAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ULockAI | Your AI's First Line of Defense",
    description:
      "Lightweight AI Security SDK — protect your LLMs and AI Agents in minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
            <Chatbot />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

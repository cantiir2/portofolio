import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: ["portfolio", "software engineer", "full-stack developer"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}


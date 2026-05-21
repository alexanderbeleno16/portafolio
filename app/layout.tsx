import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ARCHITECT.OS | Systems Engineer Portfolio",
    template: "%s | ARCHITECT.OS",
  },
  description:
    "Portafolio profesional de ingeniería de sistemas, arquitectura escalable, automatización con IA y soluciones digitales modernas.",
  keywords: [
    "systems engineer",
    "software architecture",
    "Next.js",
    "AI automation",
    "DevOps",
    "portfolio",
  ],
  authors: [{ name: "Alexander Beleño" }],
  openGraph: {
    title: "ARCHITECT.OS | Systems Engineer Portfolio",
    description:
      "Arquitectura de sistemas, automatización IA y desarrollo fullstack con precisión senior.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

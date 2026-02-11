import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react'
import { Analytics } from "@vercel/analytics/next"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishabh Nema",
  description: "Web Developer exploring React.js, Node.js and the web ecosystem. Building, learning and growing.",
  openGraph: {
    title: "Rishabh Nema",
    description: "Web Developer exploring React.js, Node.js and the web ecosystem. Building, learning and growing.",
    url: "https://rishabhnema.me",
    siteName: "Rishabh Nema",
    images: [
      {
        url: "https://rishabhnema.me/ogimage.png",
        width: 1200,
        height: 627,
        alt: "Rishabh Nema Portfolio"
      }
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}
      >
        <ReactLenis root />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

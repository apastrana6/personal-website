import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Anthony Pastrana",
  description: "Personal portfolio website of Anthony Pastrana, Software Engineer",
  icons: {
    icon: [
      { url: "/tab-icon.svg", type: "image/svg+xml" },
      { url: "/tab-icon.png", type: "image/png", sizes: "32x32" },
      { url: "/tab-icon.png", type: "image/png", sizes: "16x16" },
      { url: "/tab-icon.png", type: "image/png", sizes: "192x192" },
      { url: "/tab-icon.png", type: "image/png", sizes: "96x96" }
    ],
    apple: [
      { url: "/tab-icon.png", sizes: "180x180" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-pattern" aria-hidden="true" />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

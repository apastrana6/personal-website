import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Public_Sans({ subsets: ["latin"], weight: "300"});

export const metadata: Metadata = {
  title: "Anthony Pastrana",
  description: "Personal portfolio website of Anthony Pastrana, Software Engineer",
  icons: {
    icon: "/tab-icon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <div className="flex min-h-screen flex-col">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

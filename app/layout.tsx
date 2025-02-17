import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        </div>
      </body>
    </html>
  );
}

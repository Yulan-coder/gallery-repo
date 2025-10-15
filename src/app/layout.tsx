import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { Camera } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "@/components/ui";
import { HeaderNav } from "@/components/ui/HeaderNav";

// Site owner name (update as needed)
const SITE_OWNER = "Zainab Allawi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Gallery & Portfolio",
  description: "A curated collection of photographs and creative works showcasing a personal portfolio.",
};

// Compute the current year once at module load
const CURRENT_YEAR = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ThemeProvider>
          <HeaderNav />
          {children}
          <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-8">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
              <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
                <Camera className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Portfolio Gallery
                </span>
              </Link>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                &copy; {CURRENT_YEAR} {SITE_OWNER}. All rights reserved.
              </span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

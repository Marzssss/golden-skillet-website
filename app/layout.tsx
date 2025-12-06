import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Golden Skillet | Smashburgers, Cheesesteaks & Wings",
  description: "Local breakfast and lunch in Philadelphia. Smashburgers, cheesesteaks, wings, and coffee. Open 7AM–3PM.",
  keywords: ["Golden Skillet", "Smashburgers", "Cheesesteaks", "Wings", "Philadelphia", "Breakfast", "Lunch"],
  authors: [{ name: "Golden Skillet" }],
  metadataBase: new URL("https://goldenskilletphilly.com"),
  openGraph: {
    title: "Golden Skillet | Smashburgers, Cheesesteaks & Wings",
    description: "Best smashburgers and breakfast in Philly. Visit us at 8600 Torresdale Ave.",
    siteName: "Golden Skillet",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#BA1A1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-brand-black antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "./util";
import { Toaster } from "./ui/Toast";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL("https://ibrahimrahim.com")
      : undefined,
  title: "Ibrahim Raimi",
  description: "Design and Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans")}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
      {process.env.NODE_ENV === "production" && (
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      )}
    </html>
  );
}

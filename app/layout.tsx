import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Spring Clearance | NorthStar Motors",
    template: "%s | NorthStar Motors",
  },
  description:
    "Spring clearance on new and used vehicles. Visit NorthStar Motors in Calgary for pricing, financing, and test drives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="site-backdrop flex min-h-full flex-col font-sans text-zinc-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

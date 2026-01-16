import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "CloudFire IIT Service",
  description: "Innovative IT Solutions for the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cinzel.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Preloader />
        <Navbar />
        <SpaceBackground />
        <main className="relative z-10 w-full min-h-screen">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import BackToTopButton from '@/components/UI/BackToTopButton'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EYP Summer Training Camp",
  description: "Join the European Youth Parliament Summer Training Camp in Azerbaijan for an unforgettable experience of leadership, debate, and cultural exchange.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#2E7D32] overscroll-none`}>
        <Navbar />
        <div className="pt-16">
          {children}
          <Analytics />
          <SpeedInsights />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}

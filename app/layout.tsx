import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zarn — Protective Security AI",
  description: "AI that guards your public footprint—across web and social.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}

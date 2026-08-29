import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SportDNA",
  description: "The Right Sport for Every Child",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boban Gateway Church",
  description: "Boban Gateway Church Media Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

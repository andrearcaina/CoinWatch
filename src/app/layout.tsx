import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from '@/components';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinWatch",
  description: "An app displaying the latest cryptocurrency prices and news!",
  icons: [{ url: '/images/icon.ico', rel: 'icon' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}

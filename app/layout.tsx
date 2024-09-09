import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  Header  from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "diary-App",
  description: "diary-App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}

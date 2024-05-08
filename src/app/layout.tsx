import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/main-layout";
import { Head } from "next/document";
import Link from "next/link";

const titillium_Web = Titillium_Web({weight:"200",subsets: ['latin']});

export const metadata: Metadata = {
  title: "adToken - Unlocking the Blockchain for Digital Advertising",
  description: "Unlocking the Blockchain for Digital Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <body className={titillium_Web.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

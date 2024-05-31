import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/main-layout";
import Script from "next/script";

const titillium_Web = Titillium_Web({ weight: "200", subsets: ["latin"] });

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={titillium_Web.className}>
        <MainLayout>{children}</MainLayout>
      </body>
      <Script type="text/javascript" src="/snap.svg-min.js" />
      <Script type="text/javascript" src="/SnapSVGAnimator.min.js" />
    </html>
  );
}

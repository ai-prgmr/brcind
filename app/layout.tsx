import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BRCIND",
  description: "Personal and Corporate Insolvency Professional",
  keywords: "Insolvency Professional, Personal Insolvency, Corporate insolvency, Bankruptsy professional"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={` ${inter.className}  bg-white min-h-screen`}>
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  );
}

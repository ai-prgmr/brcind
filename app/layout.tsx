import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "BRCIND - Bishwa Ranjan Chatterjee, Personal and Corporate Insolvency Professional",
  description:
    "Bishwa Ranjan Chatterjee, is a Personal and Corporate Insolvency Professional Professional based in India. Offering services in Chandigarh, Delhi, Indore, Ahmedabad, Kolkata, Raipur, and Kanpur.",
  keywords:
    "Insolvency Professional, Personal Insolvency in India, Corporate insolvency in India, Bankruptcy professional,BRCIND Indore, Chandigarh, Delhi, Indore, Ahmedabad, Kolkata, Raipur, Kanpur,Bishwa Ranjan Chatterjee, Bishwaranjan Chatterjee ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} w-full  bg-white min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

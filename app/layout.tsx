import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'dhanushbk portfolio',
    template: '%s | dhanushbk-portfolio',
  },
  description: 'Trusted quality person',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

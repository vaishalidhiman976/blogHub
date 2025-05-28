import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogHub",
  description: "A simple blog built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased`}
      >
        <div className="flex flex-col w-full h-screen">
          <Header />
            <main className="flex flex-col flex-grow gap-[32px] row-start-2 items-center sm:items-start">
              {children}
            </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

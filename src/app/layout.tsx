import type { Metadata } from "next";
import { Recursive } from 'next/font/google'
import "./globals.css";
import Providers from '@/components/Providers'

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar/>
      <main className=' flex flex-col  min-h-[calc(100vh-3.5rem-1px)] '>
        <div className='flex  flex-col flex-1 '>
        <Providers>{children}</Providers>

          </div>
          <Footer/>
        </main>
        <Toaster/>

      </body>
    </html>
  );
}

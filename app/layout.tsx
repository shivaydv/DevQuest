import type { Metadata } from "next";

import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import clsx from "clsx";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dev Quest",
  description: "Practice Frontend Development with DevQuest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={clsx(
            GeistSans.className,
            " w-full h-[100dvh] flex flex-col  mx-auto"
          )}
        >
          <div className="flex-grow ">
            <Navbar />
            {children}
          </div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}

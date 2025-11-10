import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/app/_core/utils/query.utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCS",
  description: "Ngodingbentar - dewa qintoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
      >
        <div className="w-full h-screen bg-[#fafafa] max-w-[500px] overflow-y-scroll no-scrollbar pb-12">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}

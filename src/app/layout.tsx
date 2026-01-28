import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Paneli",
  description: "Admin Paneli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen overflow-hidden">
          <Sidebar />
          
          <div className="flex flex-col w-full overflow-hidden">
            <Header />
            <main className="flex-1 bg-[#edeff5] text-black" >
              {children}
            </main>
            <ToastContainer position="bottom-left" autoClose={2500}   hideProgressBar={false} />
          </div>
        </div>
      </body>
    </html>
  );
}

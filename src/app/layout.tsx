import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  weight: '400',
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Tomar : Web Developer and Product Designer",
  description: "Portfolio website of Ayush Tomar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (    
    <html lang="en">
      <body className={roboto.className}>
        <div className="bg-[#F5F5F7] h-full inset-0 -z-10 w-full bg-[radial-gradient(#C4C4C6_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </div>
      </body>
    </html>
  );
}

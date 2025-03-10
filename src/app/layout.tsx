import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider"

import "./globals.css";
import { ThemeToggler } from "@/components/Themetogler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Datatable",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-2 top-5"> 
            <ThemeToggler />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

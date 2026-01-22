import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { BoxiconsLoader } from "@/components/ui/boxicons-loader";
import { LoaderProvider } from "@/context/loader-context";
import { Preloader } from "@/components/ui/preloader";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mohaddis Ansari | Portfolio",
  description: "Next-gen portfolio of Mohaddis Ansari - Web Developer & UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <BoxiconsLoader />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
        <LoaderProvider>
          <Preloader />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}

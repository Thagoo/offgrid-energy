import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offgird Energy",
  description:
    "Bangalore's first ever solar platform. We provide trust, quality and right price. Get upto 30% subsidy on your installation only with Offgrid ",
  metadataBase: new URL("https://getoffgrid.energy"),
  openGraph: {
    images: "/assets/lander/icons/offgrid-logo.webp",
    title: "Offgird Energy",
    description:
      "Bangalore's first ever solar platform. We provide trust, quality and right price. Get upto 30% subsidy on your installation only with Offgrid ",
  },
  icons: {
    icon: "/assets/lander/icons/offgrid-logo.webp",
  },
  keywords: ["getoffgrid", "offgrid", "offgrid energy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-690LX5QP7M" />
      <body
        className={`${inter.className} flex flex-col items-center min-h-dvh overflow-x-hidden`}
      >
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

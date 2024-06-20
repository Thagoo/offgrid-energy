import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offgird Energy",
  description: "Offgrid installs solar in an all new way.",
  metadataBase: new URL("https://offgrid-website.vercel.app/"),
  openGraph: {
    images: "/assets/lander/offgrid-favicon.png",
  },
  icons: {
    icon: "/assets/lander/offgrid-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <GoogleAnalytics gaId="G-690LX5QP7M" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}

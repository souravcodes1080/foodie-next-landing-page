import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop"

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Landing Page",
  description:
    "A simple food landing page built using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased `}>
        <Provider>
          <ResponsiveNavbar />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}

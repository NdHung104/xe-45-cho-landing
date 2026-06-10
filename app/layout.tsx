import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Du Lịch Tài Hưng - Dịch Vụ Cho Thuê Xe Du Lịch 45 Chỗ",
  description:
    "Cho thuê xe du lịch 45 chỗ chất lượng cao, giá cả cạnh tranh. Phục vụ tận tâm, đảm bảo an toàn cho mọi chuyến đi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}

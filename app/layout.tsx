import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

export const metadata = {
  title: "Du Lịch Đi - Dịch Vụ Cho Thuê Xe Du Lịch 45 Chỗ",
  description:
    "Cho thuê xe du lịch 45 chỗ chất lượng cao, giá cả cạnh tranh. Phục vụ tận tâm, đảm bảo an toàn cho mọi chuyến đi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react"; // Cần cài đặt lucide-react

const MENU = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Đội xe", href: "#fleet" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hiệu ứng đổi màu nền khi cuộn chuột
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:rotate-3 transition">
            <span className="font-black text-xl">45</span>
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-gray-900" : "text-blue-700"
            }`}
          >
            XE DU LỊCH
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-10">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </a>
          ))}

          {/* Button Hotline */}
          <a
            href="tel:0123456789"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
          >
            <Phone size={18} />
            <span>0123.456.789</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (Overlay) */}
      <div
        className={`fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 text-lg font-medium border-b border-gray-100 text-gray-800"
            >
              {item.label}
              <ChevronRight size={20} className="text-gray-400" />
            </a>
          ))}
          <a
            href="tel:0123456789"
            className="mt-4 bg-blue-600 text-white text-center py-4 rounded-xl font-bold"
          >
            GỌI NGAY: 0123.456.789
          </a>
        </div>
      </div>
    </header>
  );
}

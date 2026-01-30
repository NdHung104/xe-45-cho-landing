"use client";

import { motion } from "framer-motion";
import { Coffee, Wifi, Tv, Wind, Shield, Users2, Luggage } from "lucide-react";

const FEATURES = [
  { icon: <Wifi size={18} />, label: "Wifi miễn phí" },
  { icon: <Wind size={18} />, label: "Điều hòa 2 chiều" },
  { icon: <Tv size={18} />, label: "Màn hình LCD" },
  { icon: <Coffee size={18} />, label: "Nước suối & Khăn lạnh" },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Chất lượng hàng đầu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6"
          >
            Đội Xe <span className="text-blue-600">Universe</span> 45 Chỗ
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dòng xe Hyundai Universe đời mới nhất, được mệnh danh là "chuyên cơ
            mặt đất" với hệ thống giảm xóc bầu hơi siêu êm ái.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] rotate-2 transition group-hover:rotate-0 duration-500" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
                alt="Xe 45 cho Universe"
                className="w-full h-[400px] object-cover transition transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex gap-4">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white flex items-center gap-2 text-sm">
                    <Users2 size={16} /> 45 Chỗ ngồi
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white flex items-center gap-2 text-sm">
                    <Luggage size={16} /> Khoang hành lý rộng
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Specs & Comfort */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="text-blue-600" /> Tiện Nghi Cao Cấp
              </h3>
              <p className="text-gray-600 text-lg">
                Xe được trang bị đầy đủ các tính năng an toàn và giải trí hiện
                đại, giúp chuyến đi dài trở nên thư giãn hơn bao giờ hết.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 p-8 rounded-[2rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">
                  Bạn cần thuê xe cho đoàn đông?
                </h4>
                <p className="opacity-90 mb-6 text-sm">
                  Chúng tôi luôn có sẵn số lượng lớn xe 45 chỗ để phục vụ các
                  tour du lịch và đưa đón nhân viên.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition active:scale-95">
                  Nhận báo giá ngay
                </button>
              </div>
              <Bus className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Icon xe bus nhỏ dùng làm decor trong card cuối
function Bus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s1-1.3 1-3c0-3-2-4-2-4l-1-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2l-1 4s-2 1-2 4c0 1.7 1 3 1 3h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

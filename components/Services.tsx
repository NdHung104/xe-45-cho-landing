"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  MapPin,
  FileText,
  HeartHandshake,
  Megaphone,
  Home,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Đưa đón học sinh/nhân viên",
    desc: "Đưa đón an toàn, đúng giờ với lộ trình tối ưu cho nhà trường và doanh nghiệp.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Du lịch đường dài",
    desc: "Xe đời mới, ghế bật ngả thoải mái cho những chuyến hành trình xa đầy thú vị.",
    icon: <MapPin className="w-8 h-8" />,
    color: "bg-indigo-500",
  },
  {
    title: "Hợp đồng tham quan",
    desc: "Ký kết hợp đồng linh hoạt theo ngày hoặc theo chuyến, giá cả cạnh tranh.",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-green-500",
  },
  {
    title: "Hành hương / Từ thiện",
    desc: "Đồng hành cùng các hội nhóm đi chùa, nhà thờ hoặc các chương trình thiện nguyện.",
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "bg-orange-500",
  },
  {
    title: "Sự kiện, Quảng cáo",
    desc: "Hỗ trợ dán decal quảng cáo, phục vụ đưa đón khách mời sự kiện sang trọng.",
    icon: <Megaphone className="w-8 h-8" />,
    color: "bg-red-500",
  },
  {
    title: "Về quê",
    desc: "Đưa đón đoàn về quê ăn Tết, thăm hỏi gia đình an toàn và thân tình.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-purple-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Dịch Vụ Của Chúng Tôi
          </motion.h2>
          <p className="text-slate-500 text-lg">
            Cung cấp giải pháp vận tải đa dạng, chất lượng cao với đội ngũ tài
            xế chuyên nghiệp và xe 45 chỗ đời mới nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${s.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}
              >
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>

              <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Xem chi tiết <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

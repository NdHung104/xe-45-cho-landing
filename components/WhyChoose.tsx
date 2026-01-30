"use client";

import { motion } from "framer-motion";
import { Bus, ShieldCheck, Banknote, CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    title: "Xe đời mới",
    desc: "Hệ thống xe Universe đời mới, ghế da cao cấp, máy lạnh cực mát và wifi miễn phí.",
    icon: <Bus className="w-6 h-6" />,
    color: "blue",
  },
  {
    title: "Tài xế kinh nghiệm",
    desc: "Đội ngũ bác tài có trên 10 năm kinh nghiệm, am hiểu cung đường, thái độ lịch sự.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "green",
  },
  {
    title: "Giá cả linh hoạt",
    desc: "Báo giá nhanh chóng, tối ưu theo lộ trình và ngân sách của từng đoàn khách.",
    icon: <Banknote className="w-6 h-6" />,
    color: "orange",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
              Giá trị cốt lõi
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">
              Tại sao hàng nghìn khách hàng tin tưởng chúng tôi?
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                +1k
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-500 ${
                  reason.color === "blue"
                    ? "bg-blue-100 text-blue-600"
                    : reason.color === "green"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                }`}
              >
                {reason.icon}
              </div>

              {/* Checkmark icon for added trust */}
              <CheckCircle2
                className="absolute top-8 right-8 text-gray-200 group-hover:text-blue-500 transition-colors"
                size={24}
              />

              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>

              {/* Bottom line decor */}
              <div className="mt-8 w-12 h-1 bg-gray-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

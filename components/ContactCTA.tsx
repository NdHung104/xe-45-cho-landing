"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin, Star } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-[#1e293b] rounded-[3.5rem] p-10 md:p-20 text-white shadow-2xl shadow-slate-200"
        >
          {/* Decor: Ánh sáng nhẹ khuếch tán (Màu dịu hơn) */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
            {/* Cột chữ (Chiếm 3/5) */}
            <div className="lg:col-span-3 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Đang trực tuyến để hỗ trợ bạn
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                Khởi đầu hành trình <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                  theo cách hoàn hảo nhất
                </span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
                Mọi chuyến đi đều xứng đáng được chăm sóc tận tâm. Hãy để chúng
                tôi đồng hành cùng đoàn của bạn.
              </p>

              <div className="flex flex-wrap gap-5">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  <Phone size={20} fill="currentColor" />
                  Gọi Báo Giá
                </a>
                <a
                  href={CONTACT.zalo}
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 rounded-2xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all active:scale-95"
                >
                  <MessageCircle size={20} />
                  Chat Zalo
                </a>
              </div>
            </div>

            {/* Cột thông tin (Chiếm 2/5) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="group p-6 rounded-[2rem] bg-slate-800/40 hover:bg-slate-800/60 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-100 mb-1">
                      Thời gian linh hoạt
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Phục vụ 24/7, kể cả ngày lễ và cuối tuần cho mọi lộ trình.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-[2rem] bg-slate-800/40 hover:bg-slate-800/60 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-100 mb-1">
                      Phủ sóng toàn quốc
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Đưa đón tận nơi tại TP.HCM và các tỉnh lân cận đi khắp cả
                      nước.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-6 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-transparent">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-200">
                  "Dịch vụ chuyên nghiệp, xe rất mới và tài xế rất nhiệt tình"
                </p>
                <p className="text-xs text-slate-500 mt-2 italic">
                  — Review từ khách hàng
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

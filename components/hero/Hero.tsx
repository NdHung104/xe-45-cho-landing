"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, ChevronRight, Star } from "lucide-react";
import Hero3D from "./Hero3D";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  const [showPopup, setShowPopup] = useState<"phone" | "zalo" | null>(null);

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Star size={16} fill="currentColor" />
            <span>DỊCH VỤ UY TÍN HÀNG ĐẦU</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Thuê Xe <span className="text-blue-600">45 Chỗ</span> <br />
            Chuyên Nghiệp
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Giải pháp di chuyển an toàn cho{" "}
            <span className="font-semibold text-gray-800">
              Học sinh, Công ty, Du lịch, Hợp đồng & Về quê.
            </span>{" "}
            Xe đời mới, tài xế tận tâm, giàu kinh nghiệm.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowPopup("phone")}
              className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            >
              <Phone size={20} className="group-hover:animate-bounce" />
              Gọi ngay
            </button>

            <button
              onClick={() => setShowPopup("zalo")}
              className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-bold hover:bg-blue-50 hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={20} />
              Chat Zalo
            </button>
          </div>

          {/* Trust Pilot / Stats */}
          <div className="mt-10 flex items-center gap-6 border-t border-gray-100 pt-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500">Hài lòng</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-500">Hỗ trợ</p>
            </div>
          </div>
        </motion.div>

        {/* Khối 3D bên phải – chỉ model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center
             h-[420px] sm:h-[520px] lg:h-[700px] xl:h-[780px]"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[80vh] pointer-events-none">
            <Hero3D />
          </div>
        </motion.div>
      </div>

      {/* --- POPUP COMPONENT --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Nội dung */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setShowPopup(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} className="text-gray-400" />
              </button>

              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
                    showPopup === "phone"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {showPopup === "phone" ? (
                    <Phone size={40} />
                  ) : (
                    <MessageCircle size={40} />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {showPopup === "phone"
                    ? "Liên hệ Hotline"
                    : "Kết nối qua Zalo"}
                </h3>
                <p className="text-gray-500 mb-8">
                  Nhân viên tư vấn sẽ hỗ trợ bạn báo giá và đặt xe ngay lập tức.
                </p>

                <div className="space-y-3">
                  <a
                    href={
                      showPopup === "phone"
                        ? `tel:${CONTACT.phone}`
                        : CONTACT.zalo
                    }
                    target={showPopup === "zalo" ? "_blank" : "_self"}
                    className={`block w-full py-4 rounded-xl font-bold text-lg transition shadow-lg ${
                      showPopup === "phone"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {showPopup === "phone" ? CONTACT.phone : "Mở ứng dụng Zalo"}
                  </a>
                  <button
                    onClick={() => setShowPopup(null)}
                    className="w-full py-3 text-gray-500 font-medium hover:text-gray-800 transition"
                  >
                    Để sau
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

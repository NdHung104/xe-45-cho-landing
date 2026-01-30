"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState<"phone" | "zalo" | null>(null);

  return (
    <>
      {/* Nút bấm cố định góc màn hình */}
      <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-[90]">
        {/* Nút Zalo */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowPopup("zalo")}
          className="relative group w-14 h-14 bg-white text-blue-600 rounded-full shadow-2xl flex items-center justify-center border border-blue-50"
        >
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
          <MessageCircle
            size={28}
            fill="currentColor"
            className="relative z-10"
          />
          <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
            Chat Zalo ngay
          </span>
        </motion.button>

        {/* Nút Gọi ngay */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowPopup("phone")}
          className="relative group w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-40" />
          <Phone size={28} fill="currentColor" className="relative z-10" />
          <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Gọi báo giá: {CONTACT.phone}
          </span>
        </motion.button>
      </div>

      {/* --- MODAL POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop làm mờ nền */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Nội dung Popup */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              className="relative bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] text-center overflow-hidden"
            >
              {/* Decor trang trí phía trên */}
              <div
                className={`absolute top-0 left-0 w-full h-2 ${showPopup === "phone" ? "bg-blue-600" : "bg-blue-500"}`}
              />

              <button
                onClick={() => setShowPopup(null)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:bg-gray-100 rounded-full transition"
              >
                <X size={20} />
              </button>

              <div
                className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 rotate-3 ${
                  showPopup === "phone"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {showPopup === "phone" ? (
                  <Phone size={40} />
                ) : (
                  <Send size={40} />
                )}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {showPopup === "phone" ? "Gọi Điện Thoại" : "Kết Nối Zalo"}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Đội ngũ điều hành xe luôn trực máy 24/7 để báo giá tốt nhất cho
                quý khách.
              </p>

              <div className="space-y-4">
                <a
                  href={
                    showPopup === "phone"
                      ? `tel:${CONTACT.phone}`
                      : CONTACT.zalo
                  }
                  target={showPopup === "zalo" ? "_blank" : "_self"}
                  className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg transition shadow-xl ${
                    showPopup === "phone"
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200"
                      : "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-100"
                  }`}
                >
                  {showPopup === "phone" ? (
                    <>
                      {" "}
                      <Phone size={20} /> {CONTACT.phone}{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <MessageCircle size={20} /> Nhắn tin Zalo ngay{" "}
                    </>
                  )}
                </a>

                <button
                  onClick={() => setShowPopup(null)}
                  className="w-full py-2 text-gray-400 font-semibold hover:text-gray-600 transition"
                >
                  Để sau
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Maximize2, Camera } from "lucide-react";

const IMAGES = [
  {
    src: "https://xemiennam.vn/wp-content/uploads/2024/05/Hyundai-Exito-47-cho-1400x788.jpg",
    title: "Ngoại thất xe Universe",
    size: "md:col-span-2 md:row-span-2", // Ô lớn nổi bật
  },
  {
    src: "https://chothuexevip.vn/uploads/2021/04/Cho-thue-xe-45-cho-da-nang-02.jpg",
    title: "Nội thất ghế da cao cấp",
    size: "col-span-1",
  },
  {
    src: "https://bagps.vn/public/media/tin-tuc/tai-xe-can-biet-mat-hieu-giao-tiep-bang-tay-khi-lai-xe_(1).jpg",
    title: "Đội ngũ bác tài tận tâm",
    size: "col-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Tiêu đề trang trí */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-bold mb-2">
              <Camera size={20} />
              <span className="tracking-[0.2em] uppercase text-sm">
                Khoảnh khắc
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Hình Ảnh <span className="text-blue-600">Thực Tế</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-center md:text-right">
            Những hình ảnh chân thực nhất về đội xe và những chuyến đi đáng nhớ
            cùng khách hàng.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-[2rem] bg-gray-100 ${img.size}`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay khi hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 text-left">
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">
                      Dịch vụ xe 45 chỗ
                    </p>
                    <h4 className="text-white text-xl font-bold">
                      {img.title}
                    </h4>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    <Maximize2 size={20} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

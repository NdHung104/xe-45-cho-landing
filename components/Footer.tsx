"use client";

import { CONTACT } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Cột 1: Giới thiệu */}
          <div className="space-y-6">
            <a href="#top" className="flex items-center gap-2 group">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="font-black text-xl">45</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                XE DU LỊCH
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Chuyên cung cấp giải pháp vận tải hành khách chất lượng cao. Đội
              xe đời mới, tài xế chuyên nghiệp, phục vụ tận tâm trên mọi nẻo
              đường.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href={CONTACT.zalo}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liên Kết</h4>
            <ul className="space-y-4">
              {["Dịch vụ", "Đội xe", "Hình ảnh", "Báo giá", "Liên hệ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center gap-2 hover:text-blue-500 transition-colors group"
                    >
                      <ChevronRight
                        size={14}
                        className="text-gray-600 group-hover:text-blue-500"
                      />
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Cột 3: Dịch vụ phổ biến */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Dịch Vụ</h4>
            <ul className="space-y-4 text-sm">
              <li>Thuê xe du lịch 45 chỗ</li>
              <li>Đưa đón nhân viên - Học sinh</li>
              <li>Hợp đồng tham quan - Hành hương</li>
              <li>Xe phục vụ sự kiện - Cưới hỏi</li>
            </ul>
          </div>

          {/* Cột 4: Thông tin liên hệ */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Thông Tin</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>
                  123 Đường Số 1, Quận 1, <br />
                  Thành phố Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:info@xedulich45.com"
                  className="hover:text-white transition-colors"
                >
                  info@xedulich45.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Dịch vụ xe du lịch 45 chỗ. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-gray-300">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

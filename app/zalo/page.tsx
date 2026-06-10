import Image from "next/image";

export default function ZaloPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-3">Liên hệ qua Zalo</h1>

        <p className="text-slate-600 mb-6">
          Quét mã QR bên dưới để trao đổi và nhận báo giá nhanh nhất.
        </p>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/zalo-qr.jpg"
            alt="QR Zalo"
            width={280}
            height={280}
            className="rounded-xl border"
          />
        </div>

        <p className="font-semibold text-lg">09xx xxx xxx</p>

        <a
          href="https://zalo.me/xxxxxxxx"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
        >
          Mở Zalo trực tiếp
        </a>
      </div>
    </main>
  );
}

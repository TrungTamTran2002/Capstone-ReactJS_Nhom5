import React from "react";

export default function AppIntro() {
  return (
    <section className="relative bg-black text-white">
      {/* Background hình mờ */}
      <div className="absolute inset-0 bg-contain bg-center bg-[url('https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg')]"></div>

      {/* Lớp overlay mờ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bên trái: nội dung */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ứng dụng tiện lợi dành cho
            <br /> người yêu điện ảnh
          </h2>
          <p className="text-gray-200 mb-6">
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition-all text-white font-bold px-6 py-3 rounded cursor-pointer shadow-lg flex items-center gap-2">
            APP MIỄN PHÍ - TẢI VỀ NGAY!
          </button>
          <p className="text-sm mt-3 text-white">
            TIX có hai phiên bản&nbsp;
            <a href="#" className="underline hover:text-blue-400">
              iOS
            </a>
            &nbsp;&amp;&nbsp;
            <a href="#" className="underline hover:text-blue-400">
              Android
            </a>
          </p>
        </div>

        {/* Bên phải: ảnh điện thoại demo */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/b7770b7a-0ddd-4b5c-b23a-9a4fa78b9ca4/3253525623/visual-code-mobile-websites-builder-screenshot"
            alt="App Preview"
            className="w-64 h-auto shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

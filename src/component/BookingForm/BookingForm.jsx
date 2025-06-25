import React, { useState, useRef } from "react"; // Import React và các hook cần dùng
import "./index.css"; // Import file CSS

export default function BookingForm() {
  // State lưu giá trị người dùng chọn
  const [phim, setPhim] = useState("");
  const [rap, setRap] = useState("");
  const [ngayGio, setNgayGio] = useState("");

  // State cho popup thông báo
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // Dùng ref để focus vào ô bị thiếu
  const phimRef = useRef(null);
  const rapRef = useRef(null);
  const ngayGioRef = useRef(null);

  // Xử lý khi người dùng click "MUA VÉ NGAY"
  const handleMuaVe = () => {
    let missing = [];

    // Kiểm tra từng trường xem có được chọn không
    if (!phim) missing.push("phim");
    if (!rap) missing.push("rạp");
    if (!ngayGio) missing.push("ngày giờ chiếu");

    // Nếu còn thiếu thì hiển thị popup và focus vào ô thiếu đầu tiên
    if (missing.length > 0) {
      if (!phim) phimRef.current.focus();
      else if (!rap) rapRef.current.focus();
      else if (!ngayGio) ngayGioRef.current.focus();

      setPopupMessage("Vui lòng chọn " + missing.join(", "));
      setShowPopup(true);

      // Tự động đóng popup sau 10 giây
      setTimeout(() => {
        setShowPopup(false);
      }, 10000);
      return;
    }

    // Nếu đủ thì xử lý logic mua vé
    console.log("Mua vé thành công!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-2">
      <div
        className="flex items-center gap-4 bg-auto rounded-b-2xl px-6 py-4"
        style={{ boxShadow: "0 0px 12px rgba(0, 0, 0, 0.5)" }}
      >
        {/* Select phim */}
        <div className="custom-select-wrapper">
          <select
            ref={phimRef}
            value={phim}
            onChange={(e) => setPhim(e.target.value)}
            className="custom-select"
          >
            <option value="">Phim</option>
            <option value="phim1">Bố Già</option>
            <option value="phim2">Cua Lại Vợ Bầu</option>
          </select>
        </div>

        {/* Select rạp */}
        <div className="custom-select-wrapper">
          <select
            ref={rapRef}
            value={rap}
            onChange={(e) => setRap(e.target.value)}
            className="custom-select"
          >
            <option value="">Rạp</option>
            <option value="rap1">Rạp CGV</option>
            <option value="rap2">Rạp Lotte</option>
          </select>
        </div>

        {/* Select ngày giờ */}
        <div className="custom-select-wrapper">
          <select
            ref={ngayGioRef}
            value={ngayGio}
            onChange={(e) => setNgayGio(e.target.value)}
            className="custom-select"
          >
            <option value="">Ngày giờ chiếu</option>
            <option value="1">18/08/2024 ~ 09:11</option>
            <option value="2">19/08/2024 ~ 14:00</option>
          </select>
        </div>

        {/* Nút mua vé */}
        <button
          className="bg-red-500 text-white font-bold px-5 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
          onClick={handleMuaVe}
        >
          MUA VÉ NGAY
        </button>
      </div>

      {/* Hiển thị popup nếu có lỗi */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2 className="font-bold">Bạn chưa chọn đủ thông tin</h2>
            <p>{popupMessage}</p>
            <button className="btn-confirm" onClick={() => setShowPopup(false)}>
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

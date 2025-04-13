import { https } from "./config";

export const getCarousel = () => {
  return https.get("/QuanLyPhim/LayDanhSachBanner");
}
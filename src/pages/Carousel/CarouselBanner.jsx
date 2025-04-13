import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { getCarousel } from "../../api/carouselService";

export default function CarouselBanner() {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    getCarousel()
      .then((res) => {
        setBannerList(res.data.content);
      })
      .catch((err) => {
        console.error("Lỗi lấy banner:", err);
      });
  }, []);

  return (
    <div className="container">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        {bannerList.map((banner, index) => (
          <div key={index}>
            <img
              src={banner.hinhAnh}
              alt={banner.maBanner}
              className="w-full h-[100%] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

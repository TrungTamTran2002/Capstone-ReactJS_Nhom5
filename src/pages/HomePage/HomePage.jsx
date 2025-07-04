import React from "react";
import ListMovie from "./ListMovie";
import CarouselBanner from "../../component/Carousel/CarouselBanner";
import BookingForm from "../../component/BookingForm/BookingForm";
import AppIntro from "../../component/AppIntro/AppIntro";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <BookingForm />
      <ListMovie />
      <AppIntro />
    </div>
  );
};

export default HomePage;

import React from "react";
import ListMovie from "./ListMovie";
import CarouselBanner from "../Carousel/CarouselBanner";
import BookingForm from "../BookingForm/BookingForm";
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

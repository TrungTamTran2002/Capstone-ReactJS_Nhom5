import React from "react";
import ListMovie from "./ListMovie";
import CarouselBanner from "../Carousel/CarouselBanner";
import BookingForm from "../BookingForm/BookingForm";

const HomePage = () => {
  return (
    <div>
      <CarouselBanner />
      <BookingForm />
      <ListMovie />
    </div>
  );
};

export default HomePage;

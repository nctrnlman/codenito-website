import React from "react";
import Banner from "../component/Banner";
import About from "../component/About";
import Carousel from "../component/Carousel";
import Review from "../component/Review";

function Homepage() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <About />
      <Carousel />
      <Review />
    </div>
  );
}

export default Homepage;

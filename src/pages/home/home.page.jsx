import React from "react";

import HeroImage from "../../assets/Hero Image.jpg";
import HeroImageMT from "../../assets/Hero Image (Tablet and Mobile).jpg";
import Checkmarks from "../../components/checkmarks/checkmarks.component";
import Airbnb from "../../assets/Airbnb.svg";
import Booking from "../../assets/Booking.svg";
import PlumGuide from "../../assets/Plum Guide.svg";

import { features } from "../../constants";

const Home = () => {
  return (
    <div className="container mx-auto lg:relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-start flex-col lg:ms-40 lg:mt-24 lg:order-1 order-2">
          <div className="text-6xl font-bold">Explore the best camps on Earth.</div>
          <div className="pt-3">
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </div>
          <div>
            {features.map((feature) => (
              <Checkmarks feature={feature} />
            ))}
          </div>
          <div className="pt-5">
            <button
              class="bg-black text-white font-bold py-2 px-4 rounded p-10"
              type="button"
            >
              View Campgrounds
            </button>
          </div>
          <div className="pt-9">
            Partnered with:
            <div className="flex flex-row">
              <img src={Airbnb} alt="" />
              <img src={Booking} alt="" />
              <img src={PlumGuide} alt="" />
            </div>
          </div>
        </div>
        
        <div className="lg:absolute lg:-top-[51px] lg:right-0 lg:z-10 lg:order-2 order-1">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="w-full h-screen object-cover hidden lg:block"
          />
          <img
            src={HeroImageMT}
            alt="HeroImageMT"
            className="lg:hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

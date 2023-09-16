import React from "react";
import HeroImage from "../../assets/Hero Image.jpg";
import Checkmarks from "../../components/checkmarks/checkmarks.component";
import { features } from "../../constants";

const Home = () => {
  return (
    <div className="container mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1>Explore the best camps on Earth.</h1>
          <div>
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </div>

          <div>
            {features.map((feature) => (
              <Checkmarks feature={feature} />
            ))}
          </div>
              
        </div>
        <div className="absolute lg:-top-[75px] right-0 z-10">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

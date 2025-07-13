import React from "react";
import Navbar from "./Components/Navbar.jsx";
import HeroImg from "./../public/hero.jpg";
import FeaturedCard from "./Components/FeaturedCard.jsx";
import FeaturedIcon1 from "./../public/torch.png";
import FeaturedIcon2 from "./../public/skyline.png";
import FeaturedIcon3 from "./../public/insulation.png";
import FeaturedIcon4 from "./../public/ventilation.png";
import SummaryCard from "./Components/SummaryCard.jsx";
import SummaryCardPhoto1 from "./../public/summary-membrane.jpg";
import SummaryCardPhoto2 from "./../public/summary-shingle.jpg";
import SummaryCardPhoto3 from "./../public/summary-insulation.jpg";
import { ButtonTertiary } from "./Components/Button.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh] ">
        <img
          src={HeroImg}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            Protect your home is our top priority
          </h1>
          <p className="text-white text-xs sm:text-base md:text-lg max-w-2xl">
            We provide the best security solutions to ensure your home is safe
            and secure. Our team of experts is dedicated to delivering top-notch
            service and support to meet all your security needs.
          </p>
        </div>
      </div>
      <div className="px-5">
        <div className="max-w-200 text-center px-2 mx-auto my-10 sm:my-15 md:my-20">
          <h2 className="text-4xl mb-5">Featured Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            totam praesentium qui earum magnam porro molestias voluptatibus
            voluptatem quo, fugit doloribus iste dolorem, similique molestiae!
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          <FeaturedCard
            FeaturedCardIcon={FeaturedIcon1}
            featuredCardHeading={"Torch-On Flooring"}
            featuredCardDesc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
            btnTitle={"More Detail"}
          />
          <FeaturedCard
            FeaturedCardIcon={FeaturedIcon2}
            featuredCardHeading={"Skyline Installation & Repair"}
            featuredCardDesc={
              "Lorem ipsum dolor sit amet consectetur amet sit amet  adipisicing elit."
            }
            btnTitle={"More Detail"}
          />
          <FeaturedCard
            FeaturedCardIcon={FeaturedIcon3}
            featuredCardHeading={"Insulation"}
            featuredCardDesc={
              "Lorem ipsum dolor sit amet consectetur sit amet adipisicing elit."
            }
            btnTitle={"More Detail"}
          />

          <FeaturedCard
            FeaturedCardIcon={FeaturedIcon4}
            featuredCardHeading={"Ventilation"}
            featuredCardDesc={
              "Lorem ipsum dolor sit amet consectetur sit adipisicing elit."
            }
            btnTitle={"More Detail"}
          />
        </div>
      </div>
      <div className="bg-blue-900 mt-10 py-15 px-5">
        <h2 className="text-4xl text-center mb-15 text-white">
          Project Summary
        </h2>
        <div className="flex justify-center flex-wrap gap-10 ">
          <SummaryCard
            SummaryCardHeading={"Liquid Urethara Membrane"}
            SummaryCardPhoto={SummaryCardPhoto1}
          />
          <SummaryCard
            SummaryCardHeading={"Shigle"}
            SummaryCardPhoto={SummaryCardPhoto2}
          />
          <SummaryCard
            SummaryCardHeading={"Insulation"}
            SummaryCardPhoto={SummaryCardPhoto3}
          />
        </div>
        <div className="pt-15 flex justify-center">
          <ButtonTertiary btnTitle={"All Projects"} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { LogIn } from "lucide-react";
import BrandLogo from "./../../public/home.png";
import HeroImg from "./../../public/hero.jpg";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-around flex-wrap items-center p-4 shadow-lg border-b-1 border-gray-400 font-semibold">
        <div className="flex items-center w-[350px] justify-between">
          {" "}
          <img
            src={BrandLogo}
            alt="Brand Logo"
            className="invert-100 w-7 mr-3"
          />
          <ol className="flex max-w-[300px] w-[100%] justify-between">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Project</li>
            <li className="cursor-pointer">Contact</li>
          </ol>
        </div>
        <div className="flex items-center gap-1 ml-7 w-16">
          <LogIn /> Login
        </div>
      </nav>

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
    </div>
  );
}

export default Navbar;

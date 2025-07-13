import React from "react";
import { LogIn } from "lucide-react";
import BrandLogo from "./../../public/home.png";


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
    </div>
  );
}

export default Navbar;

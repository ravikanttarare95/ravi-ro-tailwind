import React from "react";
import { LogIn } from "lucide-react";
import BrandLogo from "./../../public/home.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="sticky top-0 z-1000 opacity-92">
      <nav className="bg-white text-lg flex justify-around flex-wrap items-center p-5 shadow-lg border-b-1 border-gray-400 font-semibold">
        <div className="flex items-center w-[400px] justify-between">
          {" "}
          <Link to={"/"}>
            {" "}
            <img
              src={BrandLogo}
              alt="Brand Logo"
              className="invert-100 w-7 mr-3"
            />
          </Link>
          <ol className="flex max-w-[300px] w-[100%] justify-between">
            <li className="cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/service"}>Service</Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/projects"}>Projects</Link>
            </li>
          </ol>
        </div>
        <div>
          <Link to={"/login"}>
            <span className="flex items-center gap-1 ml-7 w-16  cursor-pointer">
              <LogIn /> Login
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

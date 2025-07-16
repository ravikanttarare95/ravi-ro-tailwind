import React from "react";
import { LogIn } from "lucide-react";
import BrandLogo from "./../../public/home.png";
import { Link } from "react-router";

function Navbar({ active }) {
  return (
    <>
      <nav className="sticky top-0 z-1000 backdrop-blur-sm bg-white/80 text-lg flex justify-around flex-wrap items-center px-5 shadow-lg border-b-1 border-gray-400 font-semibold">
        <div className="flex items-center w-[400px] justify-between">
          {" "}
          <Link to={"/"}>
            {" "}
            <img
              src={BrandLogo}
              alt="Brand Logo"
              className="invert-100 w-10 mr-3  hover:scale-120 duration-300"
            />
          </Link>
          <ol className="flex max-w-[300px] w-[100%] justify-between">
            <li
              className={`cursor-pointer py-4 px-3 ${
                active === "home" ? "bg-blue-800 text-white" : ""
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`cursor-pointer py-4 px-3 ${
                active === "service" ? "bg-blue-800 text-white" : ""
              }`}
            >
              <Link to={"/service"}>Service</Link>
            </li>
            <li
              className={`cursor-pointer py-4 px-3 ${
                active === "projects" ? "bg-blue-800 text-white" : ""
              }`}
            >
              <Link to={"/projects"}>Projects</Link>
            </li>
          </ol>
        </div>
        <div>
          <Link to={"/login"}>
            <span className="flex items-center gap-1 ml-7 w-16  cursor-pointer">
              <LogIn />{" "}
              <span className={`${active === "login" ? "border-b-2" : ""}`}>
                Login
              </span>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

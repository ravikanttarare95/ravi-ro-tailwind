import React from "react";
import { LogIn } from "lucide-react";
import BrandLogo from "./../../public/home.png";
import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-around flex-wrap items-center p-4 shadow-lg border-b-1 border-gray-400 font-semibold">
        <div className="flex items-center w-[350px] justify-between">
          {" "}
          <Link to={"/"}>
            {" "}
            <img
              src={BrandLogo}
              alt="Brand Logo"
              className="invert-100 w-7 mr-3"
            />
          </Link>
          <ol className="flex max-w-[270px] w-[100%] justify-between">
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
        <div className="flex items-center gap-1 ml-7 w-16  cursor-pointer">
          <LogIn /> Login
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

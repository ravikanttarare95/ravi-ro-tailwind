import React from "react";
import { ButtonTertiary } from "./../Components/Button";
import ProfileIcon from "./../../public/profile.png";
import Navbar from "../Components/Navbar";

function LoginForm() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center p-5 my-auto mt-20">
        <div className="relative p-8 sm:p-9 shadow-2xl bg-white rounded-md w-100 flex flex-col gap-5 text-center">
          <img
            src={ProfileIcon}
            alt="Icon"
            className="absolute -top-1/8 left-1/2 -translate-x-1/2 w-25"
          />
          <h1 className="text-3xl my-7">Member Login</h1>
          <input
            type="text"
            placeholder="User Name"
            className="bg-gray-200 py-2 px-6 text-md text-center rounded-sm focus:outline-amber-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 py-2 px-6 text-md text-center rounded-sm focus:outline-amber-600"
          />
          <div className="w-full flex flex-col gap-3 mt-3">
            <ButtonTertiary btnTitle={"Login"} />
            <p className="text-orange-600 cursor-pointer text-sm">
              Forgot Password?
            </p>
            <ButtonTertiary btnTitle={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

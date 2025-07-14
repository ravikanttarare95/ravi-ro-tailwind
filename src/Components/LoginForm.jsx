import React from "react";
import { ButtonTertiary } from "./Button";
import ProfileIcon from "./../../public/profile.png";

function LoginForm() {
  return (
    <div className="relative p-5 pt-12 sm:p-9 sm:pt-15 shadow-xl hover:shadow-2xl hover:-translate-y-2 bg-white rounded-md w-full flex flex-col sm:w-100  gap-5 text-center duration-300">
      <img
        src={ProfileIcon}
        alt="Icon"
        className="absolute -top-1/10 left-1/2 -translate-x-1/2 w-25"
      />
      <h1 className="text-3xl my-7">Member Login</h1>
      <input
        type="text"
        placeholder="User Name"
        className="bg-gray-200 py-2 px-6 text-md text-center rounded-sm focus:outline-amber-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 py-2 px-6 text-md text-center rounded-sm focus:outline-amber-400"
      />
      <div className="w-full flex flex-col gap-3 mt-3">
        <ButtonTertiary btnTitle={"Login"} />
        <p className="text-orange-600 cursor-pointer text-sm">
          Forgot Password?
        </p>
        <ButtonTertiary btnTitle={"Sign Up"} />
      </div>
    </div>
  );
}

export default LoginForm;

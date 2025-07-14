import React from "react";
import { ButtonTertiary } from "./Button";
import ProfileIcon from "./../../public/profile.png";

function LoginForm() {
  return (
    <div className="relative p-12 shadow-2xl rounded-md max-w-100 flex flex-col gap-7 text-center">
      <img
        src={ProfileIcon}
        alt="Icon"
        className="absolute -top-1/8 left-1/2 -translate-x-1/2 w-30"
      />
      <h1 className="text-3xl my-7">Member Login</h1>
      <input
        type="text"
        placeholder="User Name"
        className="bg-gray-200 py-3 px-6 text-lg text-center rounded-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 py-3 px-6 text-lg text-center rounded-sm"
      />
      <div className="w-full flex flex-col gap-3 mt-3">
        <ButtonTertiary btnTitle={"Login"} />
        <p className="text-orange-600 cursor-pointer">Forgot Password?</p>
        <ButtonTertiary btnTitle={"Sign Up"} />
      </div>
    </div>
  );
}

export default LoginForm;

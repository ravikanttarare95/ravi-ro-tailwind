import React from "react";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import LoginImg from "./../../public/login.png";

function Login() {
  return (
    <div>
      <Navbar active={"login"} />
      <div className="max-w-300 flex flex-col gap-20 sm:flex-row justify-around items-center flex-wrap mx-auto md:mt-10 p-5  sm:p-10 duration-300">
        <img
          src={LoginImg}
          alt="Image"
          className="w-100 drop-shadow-md hover:drop-shadow-xl duration-300 hover:scale-105"
        />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

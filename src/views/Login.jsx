import React from "react";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import LoginImg from "./../../public/login.png";
import Footer from "../Components/Footer";

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active={"login"} />
      <div className="flex-grow">
        <div className="max-w-300 flex flex-col gap-20 sm:flex-row justify-around items-center flex-wrap mx-auto md:mt-10 p-5 sm:p-10 duration-300">
          <img
            src={LoginImg}
            alt="Image"
            className="w-100 drop-shadow-md hover:drop-shadow-xl duration-300 hover:scale-105"
          />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

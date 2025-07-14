import React from "react";
import Navbar from "./../Components/Navbar";

function Service() {
  return (
    <div>
      <Navbar active={"service"}/>
      <h1 className="text-[clamp(4rem,10vw,8rem)] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        Service
      </h1>
    </div>
  );
}

export default Service;

import React from "react";
import Navbar from "./../Components/Navbar";

function Projects() {
  return (
    <div>
      <Navbar active={"projects"}/>
      <h1 className="text-[clamp(4rem,10vw,8rem)] fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        Projects
      </h1>
    </div>
  );
}

export default Projects;

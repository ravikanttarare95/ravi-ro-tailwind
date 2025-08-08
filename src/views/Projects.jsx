import React from "react";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import SummaryCardPhoto1 from "./../../public/summary-membrane.jpg";
import SummaryCardPhoto2 from "./../../public/summary-shingle.jpg";
import SummaryCardPhoto3 from "./../../public/summary-insulation.jpg";

function Projects() {
  const projects = [
    {
      title: "Modern Residential Complex",
      image: SummaryCardPhoto1,
      category: "Membrane Installation",
      description:
        "Complete roofing solution for a 50-unit residential complex",
    },
    {
      title: "Commercial Center Renovation",
      image: SummaryCardPhoto2,
      category: "Shingle Roofing",
      description: "Major renovation project for downtown shopping center",
    },
    {
      title: "Eco-Friendly Housing",
      image: SummaryCardPhoto3,
      category: "Insulation",
      description:
        "Energy-efficient insulation for sustainable housing project",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active={"projects"} />
      <div className="flex py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Our Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

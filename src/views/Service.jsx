import React from "react";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import { CheckCircle } from "lucide-react";

function Service() {
  const services = [
    {
      title: "Torch-On Roofing",
      description:
        "Professional installation of torch-on membrane systems for flat roofs",
      features: [
        "Waterproof Protection",
        "Long-lasting Durability",
        "Expert Installation",
      ],
    },
    {
      title: "Skylight Solutions",
      description:
        "Installation and repair of modern skylights for natural lighting",
      features: ["Energy Efficient", "UV Protection", "Weatherproof Design"],
    },
    {
      title: "Insulation Services",
      description: "Complete insulation solutions for temperature control",
      features: [
        "Energy Savings",
        "Temperature Control",
        "Moisture Protection",
      ],
    },
    {
      title: "Ventilation Systems",
      description: "Advanced ventilation solutions for optimal airflow",
      features: [
        "Improved Air Quality",
        "Moisture Control",
        "Energy Efficiency",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active={"service"} />
      <div className="flex py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-900">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;

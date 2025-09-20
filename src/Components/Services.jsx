import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBug, FaRobot, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { SiPostman, SiSelenium } from "react-icons/si";
import FadeInWhenVisible from "./FadeInWhenVisible";
const services = [
  {
    name: "Manual Testing",
    desc: "End-to-end functional and regression testing for software quality assurance.",
    icon: <FaBug />,
  },
  {
    name: "Automation Testing",
    desc: "Automated test scripts using Selenium, Python, and frameworks for faster delivery.",
    icon: <FaRobot />,
  },
  {
    name: "API Testing",
    desc: "Ensuring API reliability and performance using Postman & other tools.",
    icon: <SiPostman />,
  },
  {
    name: "Web Testing",
    desc: "Comprehensive website testing for UI, functionality, and performance.",
    icon: <FaGlobe />,
  },
  {
    name: "Mobile Testing",
    desc: "Testing mobile apps across iOS & Android for seamless user experience.",
    icon: <FaMobileAlt />,
  },
  {
    name: "Selenium Expertise",
    desc: "Robust automation with Selenium WebDriver for multiple platforms.",
    icon: <SiSelenium />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <FadeInWhenVisible>
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-400 ">
        My Services
      </h2>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-black-200 shadow-lg border border-gray-100 
                       hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
                       hover:scale-105 transform transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Services;

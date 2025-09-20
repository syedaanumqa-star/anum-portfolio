import React, { useState } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import img from "../assets/imgs/projects/text-repeater.png";
import img1 from "../assets/imgs/projects/fulfillkaro-pk.png";
import img2 from "../assets/imgs/projects/hexris-color-game.png";
import img3 from "../assets/imgs/projects/age-calculater.png";
import img4 from "../assets/imgs/projects/quotes-and-saying.png";
import img5 from "../assets/imgs/projects/nick-name-generator.png";
import img6 from "../assets/imgs/projects/leak-stop.png";
import img7 from "../assets/imgs/projects/olcmhr-edu-pk.png";
import img8 from "../assets/imgs/projects/nunee-thaimassage.png";
import img9 from "../assets/imgs/projects/sesisendleleni-org.png";
import img10 from "../assets/imgs/projects/thecocktailbot.png";


const allProjects = [
  {
    id: 1,
    title: "The-Cocktail-Bot",
    desc: "Tested chatbot-based cocktail recommendation system. Validated recipe search, ingredient filtering, and smooth conversational flow across devices.",
    image: img10,
    link: "#",
  },
  {
    id: 2,
    title: "Sesisendleleni-Org",
    desc: "Performed website QA for a non-profit platform. Ensured smooth navigation, responsive design, accurate content rendering, and accessibility compliance.",
    image: img9,
    link: "#",
  },
  {
    id: 3,
    title: "Nunee-Thaimassage",
    desc: "Conducted functional and UI testing for a Thai massage booking website. Verified appointment scheduling, mobile responsiveness, and payment workflows.",
    image: img8,
    link: "#",
  },
  {
    id: 4,
    title: "Olcmhr-Edu-Pk",
    desc: "Executed end-to-end testing for an educational portal. Focused on course registration, student login, and performance of dynamic learning modules.",
    image: img7,
    link: "#",
  },
  {
    id: 5,
    title: "Manual Testing – Text Repeater",
    desc: "Created detailed manual test cases for an app that repeats text inputs. Validated input handling, duplication accuracy, and usability across devices.",
    image: img,
    link: "#",
  },
  {
    id: 6,
    title: "Leak-Stop",
    desc: "Tested IoT-based water leakage detection system. Verified sensor accuracy, mobile alerts, and integration with monitoring dashboard.",
    image: img6,
    link: "#",
  },
  {
    id: 8,
    title: "FulFillKaro – API & Mobile Testing",
    desc: "Performed API and mobile app testing for an e-commerce platform. Validated order management, payment gateway security, and API reliability with Postman.",
    image: img1,
    link: "#",
  },
  {
    id: 9,
    title: "Hexris Color Game – Functional Testing",
    desc: "Tested game mechanics and performance. Verified color-matching logic, UI responsiveness, cross-platform stability, and stress handling under load.",
    image: img2,
    link: "#",
  },
  {
    id: 10,
    title: "Age Calculator – Automation Framework",
    desc: "Built an automation framework to test input validation, leap year handling, and accurate age calculation across browsers and devices.",
    image: img3,
    link: "#",
  },
  {
    id: 11,
    title: "Quotes & Sayings – Cross Browser Testing",
    desc: "Executed cross-browser automation using Selenium. Ensured consistent rendering of quotes, responsive design, and accurate text display across devices.",
    image: img4,
    link: "#",
  },
  {
    id: 7,
    title: "Nickname Generator – QA & Reporting",
    desc: "Tested nickname generation logic for randomness and uniqueness. Ensured input/output correctness, tracked bugs in Jira, and documented test reports.",
    image: img5,
    link: "#",
  },
];


const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedProjects = showMore ? allProjects : allProjects.slice(0, 4);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <FadeInWhenVisible>
        <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-14">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
            >
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content below image */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
                <a
                  href={project.link}
                  className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
                >
                  View Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-12">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
            >
              View More
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              View Less
            </button>
          )}
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Projects;

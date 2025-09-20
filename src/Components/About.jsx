import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

function About() {
  return (
    <section
      className=" bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20"
      id="about"
    >
      <FadeInWhenVisible>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-28 flex items-center justify-center rounded-xl block-1">
              <p className="text-lg font-bold">6+ Years Exp</p>
            </div>
            <div className="h-28 flex items-center justify-center rounded-xl block-2">
              <p className="text-lg font-bold">20+ Projects</p>
            </div>
            <div className="h-28 flex items-center justify-center rounded-xl block-3">
              <p className="text-lg font-bold">15+ Clients</p>
            </div>
            <div className="h-28 flex items-center justify-center rounded-xl block-4">
              <p className="text-lg font-bold">QA Specialist</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-400">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Hello, I'm <span className="font-semibold text-white">Anam</span>, 
              and I specialize in building <span className="text-blue-400">robust and scalable automation systems</span> 
              that drive business growth. With over{" "}
              <span className="font-semibold">6 years of experience</span>, I excel
              at bridging the gap between complex technical requirements and real-world business needs.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am an expert in <span className="font-semibold">manual testing</span> 
              and <span className="font-semibold">quality assurance</span>, ensuring every workflow I design is not only 
              efficient but also reliable and bug-free. My proficiency with top-tier CRMs like{" "}
              <span className="text-blue-400">GoHighLevel</span>,{" "}
              <span className="text-blue-400">HubSpot</span>, and{" "}
              <span className="text-blue-400">Pipedrive</span> allows me to create 
              seamless, automated pipelines that convert leads into loyal customers.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              My goal is simple: to help businesses operate more efficiently, 
              so they can focus on what they do best.
            </p>

            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg font-semibold transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

export default About;

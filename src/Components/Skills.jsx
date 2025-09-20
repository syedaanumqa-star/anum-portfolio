import React from "react";
import { FaPython, FaJava, FaJsSquare, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiSelenium, SiPostman, SiJira, SiJenkins } from "react-icons/si";
import FadeInWhenVisible from "./FadeInWhenVisible";
const skills = [
  { name: "Manual Testing", icon: "📝" },
  { name: "Automation Testing", icon: "🤖" },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Selenium", icon: <SiSelenium /> },
  { name: "API Testing (Postman)", icon: <SiPostman /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Agile / Scrum", icon: "📈" },
  { name: "SQL / Databases", icon: <FaDatabase /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "CI/CD (Jenkins)", icon: <SiJenkins /> },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <FadeInWhenVisible>
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-400">
        My Technical Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-6 flex flex-col items-center justify-center text-center rounded-2xl bg-white shadow-lg border border-gray-200 
                       hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
                       hover:text-white transition duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Skills;

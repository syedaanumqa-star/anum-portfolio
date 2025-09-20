import React from "react";
import { motion } from "framer-motion";
import img from "../assets/imgs/profilr/anam dp.png";
import FadeInWhenVisible from "./FadeInWhenVisible";

const balls = Array.from({ length: 20 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 40) + 30}px`, // smaller + responsive
  delay: i * 1.2,
  duration: 10 + Math.random() * 10,
  colors: [
    "from-pink-700 to-purple-600",
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-fuchsia-600",
    "from-green-600 to-emerald-600",
    "from-yellow-600 to-orange-600",
  ],
}));

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 min-h-screen gap-10 overflow-hidden" 
    >
     
      {balls.map((ball, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r ${
            ball.colors[i % ball.colors.length]
          }`}
          style={{
            width: ball.size,
            height: ball.size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(25px)",
            opacity: 0.85,
            zIndex: 0,
          }}
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -120, 120, 0],
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.6, 0.9, 0.7, 0.8],
          }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ball.delay,
          }}
        />
      ))}

      <FadeInWhenVisible>
        <motion.img
          src={img}
          alt="Profile"
          className="w-52 md:w-80 relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </FadeInWhenVisible>

 
      <FadeInWhenVisible>
        <div className="text-center md:text-left relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-extrabold text-blue-600 leading-tight"
          >
            Hi, I’m <br />
            <span className="text-gray-900">Syeda Anum</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base md:text-xl text-gray-700 mt-4 max-w-xl leading-relaxed"
          >
            A{" "}
            <span className="font-semibold text-blue-500">
              Software Quality Assurance Engineer
            </span>{" "}
            with <span className="font-semibold">6+ years</span> of experience in{" "}
            <span className="text-blue-500">Manual</span> &{" "}
            <span className="text-purple-500">Automated Testing</span>. Skilled
            in Selenium, Jira, API Testing & Test Automation.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            View My Work
          </motion.a>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Home;

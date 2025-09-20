import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 tracking-wide animate-pulse">
   Anam
</h1>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





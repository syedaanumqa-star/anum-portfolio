import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-blue-600 text-white py-6 mt-20">
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.89,22,103.78,29.13,158,17.39C230,50.88,284,16,339,0s109,6,168,20c59,14,113,18,172-3s122-63,184-57,113,56,169,78c56,22,117,22,168,0V0Z"
          opacity=".25"
          className="fill-current text-white"
        ></path>
      </svg>
      <div className="text-center relative z-10">
        <p>© {new Date().getFullYear()} Anum Abbas | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

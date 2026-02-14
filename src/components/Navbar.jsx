import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#0b0b0b] border-b border-blue-500 z-50">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
          SuRi
        </h2>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;


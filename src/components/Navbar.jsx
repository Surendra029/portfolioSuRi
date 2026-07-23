import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200">
      <div className="container nav">

        {/* Logo */}
        <h2 className="brand">
          SM.
        </h2>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;


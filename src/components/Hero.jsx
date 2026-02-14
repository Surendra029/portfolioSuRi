import React from "react";
import profileImg from "../assets/profile1.jpeg";

function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-black text-white flex items-center">
      <div className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-blue-500 mb-3 text-2xl md:text-4xl">
            Hi, My Name Is
          </p>

          <h1 className="text-2xl md:text-5xl italic leading-tight">
            Madduri Surendra Nath Yadav
          </h1>

          <p className="mt-4 text-gray-400 text-lg md:text-2xl">
            Java Full Stack Developer | React Developer | Problem Solver
          </p>
        </div>

        {/* Right Image */}
        <img
          src={profileImg}   
          alt="profile"
          className="w-40 h-40 md:w-56 md:h-56  border-4 "
        />

      </div>
    </section>
  );
}

export default Hero;

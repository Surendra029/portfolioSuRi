import React from "react";
import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-gray-900 flex items-center justify-center bg-gray-100">
              <img
                src={profileImg}
                alt="Surendra"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-tight">
              Surendra M
            </h1>
            <p className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Architecting production-grade applications. 25% faster queries. 20% reduced latency. Enterprise-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

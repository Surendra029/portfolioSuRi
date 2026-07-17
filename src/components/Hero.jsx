import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Image with animation */}
          <div className="flex-shrink-0 transform transition-all duration-500 hover:scale-110" style={{ transform: `translateY(${scrollY * 0.05}px) scale(1)` }}>
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 flex items-center justify-center bg-gray-800 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-fade-in flex-shrink-0">
              <img
                src={profileImg}
                alt="Surendra M"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 animate-slide-in text-center lg:text-left">
            <p className="text-xs sm:text-sm font-black text-blue-400 uppercase tracking-widest mb-2">
              🚀 Full Stack Developer • Java • React • Spring Boot
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-3 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", letterSpacing: "-1px", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
              Surendra M
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-300 mb-4">
              Building Enterprise-Grade Solutions
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              ⚡ 25% faster queries • 🎯 20% reduced latency • 🏆 Production-ready systems that scale
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                Let's Talk
              </a>
              <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 font-black hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
                See Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-in { animation: slide-in 0.8s ease-out 0.2s both; }
      `}</style>
    </section>
  );
}

export default Hero;

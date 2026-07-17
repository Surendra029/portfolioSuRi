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
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image with animation */}
          <div className="flex-shrink-0 transform transition-all duration-500 hover:scale-110" style={{ transform: `translateY(${scrollY * 0.05}px) scale(1)` }}>
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-400 flex items-center justify-center bg-gray-800 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-fade-in">
              <img
                src={profileImg}
                alt="Surendra M"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 animate-slide-in">
            <p className="text-sm font-black text-blue-400 uppercase tracking-widest mb-2">
              🚀 Full Stack Developer • Java • React • Spring Boot
            </p>
            <h1 className="text-6xl md:text-8xl font-black mb-3 tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse" style={{ fontFamily: "'Playfair Display', serif", fontWeight: "900", letterSpacing: "-2px" }}>
              Surendra M
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
              Building Enterprise-Grade Solutions
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              ⚡ 25% faster queries • 🎯 20% reduced latency • 🏆 Production-ready systems that scale
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                Let's Talk
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-black hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
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

import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900" id="about">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-8 tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
          About Me
        </h2>
        <div className="relative">
          {/* Animated background box */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 rounded-lg blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="relative bg-white/80 backdrop-blur p-8 rounded-lg border-2 border-blue-300 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 group" style={{ animation: `slideUp 0.8s ease-out` }}>
            <p className="text-lg text-gray-800 leading-relaxed font-medium group-hover:text-blue-900 transition-colors">
              I'm a <span className="font-black text-blue-600">passionate full-stack developer</span> specialized in architecting enterprise-grade applications. 
              With expertise in <span className="font-black text-purple-600">Spring Boot, React.js, and microservices</span>, I deliver production-ready solutions that scale.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium mt-4 group-hover:text-blue-900 transition-colors">
              My proven track record includes <span className="font-black text-green-600">25% query optimization</span>, 
              <span className="font-black text-orange-600"> 20% latency reduction</span>, and <span className="font-black text-pink-600">15% bug reduction</span>. 
              I build systems that work at scale.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;


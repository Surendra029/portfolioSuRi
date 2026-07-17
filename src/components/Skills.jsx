import React from "react";

const Skills = () => {
  const skillCategories = {
    "Core": "Java, Python, JavaScript, TypeScript, SQL, C",
    "Backend": "Spring Boot, Hibernate, Node.js, Express.js, REST APIs, JWT, Microservices",
    "Frontend": "React.js, HTML5, CSS3, Responsive Web Design",
    "Data": "MySQL, MongoDB Atlas, Query Optimization, Schema Design",
    "DevOps": "Git, GitHub, Maven, Docker Basics, AWS",
    "Expertise": "E2E Encryption, WebSockets, Zero-Knowledge Architecture, Real-time Systems"
  };

  const colors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-orange-500 to-red-500", "from-indigo-500 to-blue-500", "from-rose-500 to-orange-500"];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white text-gray-900" id="skills">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        <h2 className="text-4xl font-black mb-12 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div 
              key={category} 
              className={`bg-gradient-to-br ${colors[index]} p-6 text-white rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer`}
              style={{ animation: `fadeIn 0.6s ease-out ${index * 0.1}s both` }}
            >
              <h3 className="text-lg font-black mb-3 uppercase tracking-wider group-hover:scale-110 inline-block transition-transform duration-300">
                {category}
              </h3>
              <p className="text-sm leading-relaxed font-medium group-hover:text-white/95 transition-all">{skills}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;

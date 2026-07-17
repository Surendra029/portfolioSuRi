import React from "react";

const Achievements = () => {
  const stats = [
    { number: "25%", label: "Query Speed", icon: "⚡", color: "from-blue-500 to-cyan-500" },
    { number: "20%", label: "Latency Reduction", icon: "🚀", color: "from-purple-500 to-pink-500" },
    { number: "15%", label: "Bug Reduction", icon: "🎯", color: "from-green-500 to-emerald-500" },
    { number: "3+", label: "Enterprise Apps", icon: "🏢", color: "from-orange-500 to-red-500" }
  ];

  const certifications = [
    { name: "Java Full Stack Development Certification", issuer: "KIT Skill Hub", year: "2024", icon: "🏆" },
    { name: "Python Programming Certification", issuer: "Intern Certify", year: "2023", icon: "🎓" }
  ];

  const education = [
    { degree: "B.Tech in Information Technology", school: "NRI Institute of Technology", cgpa: "7.20/10.00", year: "2021 – 2025", icon: "📚" },
    { degree: "Higher Secondary (12th Grade)", school: "Akanksha Jr College", cgpa: "7.80/10.00", year: "2019 – 2021", icon: "🎒" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-900" id="achievements">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-12 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Achievements
        </h2>

        {/* Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-8 text-gray-900">Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${stat.color} p-6 text-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                style={{ animation: `bounceIn 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="text-4xl mb-2 animate-bounce">{stat.icon}</div>
                <div className="text-3xl font-black">{stat.number}</div>
                <p className="text-sm font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-6 text-gray-900">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:translate-x-2 group"
                style={{ animation: `slideIn 0.6s ease-out ${index * 0.2}s both` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{cert.icon}</span>
                  <p className="font-black text-blue-900">{cert.name}</p>
                </div>
                <p className="text-sm text-blue-700">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-black mb-6 text-gray-900">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:translate-x-2 group"
                style={{ animation: `slideIn 0.6s ease-out ${index * 0.2}s both` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{edu.icon}</span>
                  <p className="font-black text-purple-900">{edu.degree}</p>
                </div>
                <p className="text-sm text-purple-700">{edu.school}</p>
                <p className="text-xs text-purple-600 mt-1">CGPA: {edu.cgpa} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Achievements;

import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Independent Full Stack Developer",
      company: "Freelance & Project-Based",
      period: "July 2025 – Present",
      icon: "🚀",
      highlights: [
        "Architecting secure full-stack applications using Java, Spring Boot, React.js",
        "Optimizing database structures for performance and scalability",
        "Delivering enterprise-ready solutions for modern web ecosystems"
      ]
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Kapil IT Skill Hub, Hyderabad",
      period: "January 2024 – June 2024",
      icon: "💼",
      highlights: [
        "Built 3 full-stack enterprise applications, reducing processing time by 15%",
        "Architected RESTful APIs, improving data retrieval latency by 20%",
        "Optimized SQL queries, achieving 25% faster reporting speeds",
        "Reduced post-deployment bugs by 15% through rigorous testing"
      ]
    },
    {
      role: "AI and ML Intern",
      company: "Next Hub Technologies",
      period: "June 2023 – December 2023",
      icon: "🤖",
      highlights: [
        "Executed end-to-end data preprocessing pipelines",
        "Performed Exploratory Data Analysis on complex datasets",
        "Mastered Python, Pandas, NumPy, and Matplotlib"
      ]
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white text-gray-900" id="experience">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        <h2 className="text-4xl font-black mb-12 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-4 border-blue-500 pl-6 py-4 hover:border-purple-500 transition-all duration-300 transform hover:translate-x-2 group"
              style={{ animation: `slideIn 0.6s ease-out ${index * 0.2}s both` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{exp.icon}</span>
                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{exp.role}</h3>
              </div>
              <p className="text-blue-700 font-bold mb-1">{exp.company}</p>
              <p className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-4">{exp.period}</p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-700 flex items-start group/item">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover/item:text-blue-700 transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Experience;

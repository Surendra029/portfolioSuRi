import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Secure E2EE Burner Chat",
      period: "2024 – 2025",
      highlight: "Real-time encrypted messaging at scale",
      description: "Engineered end-to-end encrypted messaging with zero server-side logs. Implemented RSA-OAEP via Web Crypto API ensuring absolute client-side confidentiality. Zero-knowledge architecture with MongoDB Atlas for complete data privacy.",
      tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB Atlas"],
      github: "https://github.com/Surendra029",
      status: "In Production"
    },
    {
      title: "Smart Irrigation System",
      period: "2024",
      highlight: "20% water waste reduction through IoT",
      description: "Deployed closed-loop IoT system with Python predictive modeling. Automated water supply control based on evapotranspiration analysis. Delivered measurable environmental impact in agricultural automation.",
      tech: ["Python", "Arduino", "MySQL", "REST API"],
      github: "https://github.com/Surendra029",
      status: "Completed"
    },
    {
      title: "Enterprise Full Stack Applications",
      period: "2024",
      highlight: "3 production systems. 15% faster processing.",
      description: "Architected 3 enterprise applications using Spring MVC. Optimized normalized MySQL schemas and complex queries (Joins, Aggregates, Stored Procedures)—accelerated data retrieval by 25%. Reduced post-deployment bugs by 15% through rigorous testing.",
      tech: ["Java", "Spring MVC", "MySQL", "REST APIs"],
      github: "https://github.com/Surendra029",
      status: "Completed"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 text-gray-900" id="projects">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-12 tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              style={{ animation: `slideInRight 0.6s ease-out ${index * 0.2}s both` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white border-l-4 border-purple-500 group-hover:border-pink-500 p-6 hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-5px]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600">{project.title}</h3>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{project.period}</p>
                  </div>
                  <span className="text-xs font-black bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full animate-pulse">{project.status}</span>
                </div>
                
                <p className="text-base font-bold text-purple-700 mb-3 group-hover:text-pink-700 transition-colors">{project.highlight}</p>
                <p className="text-gray-700 leading-relaxed mb-4 group-hover:text-gray-900 transition-colors">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-black text-purple-600 uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-bold bg-gradient-to-r from-blue-100 to-purple-100 text-purple-900 px-3 py-1 rounded-full border border-purple-300 group-hover:border-pink-400 transition-all duration-300 transform hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-black text-purple-600 hover:text-pink-600 transition-all duration-300 text-sm inline-flex items-center gap-2 group/link"
                >
                  View Code <span className="transform group-hover/link:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;

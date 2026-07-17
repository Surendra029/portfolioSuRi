import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Secure E2EE Burner Chat",
      period: "2024 – 2025",
      highlight: "Real-time encrypted messaging at scale",
      description: "Engineered end-to-end encrypted messaging with zero server-side logs. Implemented RSA-OAEP via Web Crypto API ensuring absolute client-side confidentiality. Zero-knowledge architecture with MongoDB Atlas for complete data privacy.",
      tech: "React.js, Node.js, Express.js, Socket.io, MongoDB Atlas",
      github: "https://github.com/Surendra029",
    },
    {
      title: "Smart Irrigation System",
      period: "2024",
      highlight: "20% water waste reduction through IoT",
      description: "Deployed closed-loop IoT system with Python predictive modeling. Automated water supply control based on evapotranspiration analysis. Delivered measurable environmental impact in agricultural automation.",
      tech: "Python, Arduino, MySQL, REST API",
      github: "https://github.com/Surendra029",
    },
    {
      title: "Enterprise Full Stack Applications",
      period: "2024",
      highlight: "3 production systems. 15% faster processing.",
      description: "Architected 3 enterprise applications using Spring MVC. Optimized normalized MySQL schemas and complex queries (Joins, Aggregates, Stored Procedures)—accelerated data retrieval by 25%. Reduced post-deployment bugs by 15% through rigorous testing.",
      tech: "Java, Spring MVC, MySQL, REST APIs",
      github: "https://github.com/Surendra029",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900" id="projects">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-10 tracking-tight">Projects</h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-gray-900 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-black">{project.title}</h3>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{project.period}</span>
              </div>
              <p className="text-sm font-bold text-gray-900 mb-3">{project.highlight}</p>
              <p className="text-gray-700 leading-relaxed mb-3">{project.description}</p>
              <p className="text-gray-600 text-sm mb-4">
                <span className="font-bold">Tech Stack:</span> {project.tech}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-gray-900 hover:text-gray-600 transition text-sm"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

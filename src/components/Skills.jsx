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

  return (
    <section className="py-20 bg-gray-50 text-gray-900" id="skills">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-10 tracking-tight">Skills</h2>
        <div className="space-y-5">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">{category}</h3>
              <p className="text-gray-700 font-medium">{skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

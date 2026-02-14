import React from "react";
import { FaJava, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "JavaScript", icon: <FaReact /> }, // Using React icon for JavaScript
    { name: "Node.js", icon: <FaReact /> }, // Using React icon for Node.js
    { name: "RESTful APIs", icon: <FaReact /> }, // Using React icon for RESTful APIs
  ];

  return (
    <section className="skills-section fade-in" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

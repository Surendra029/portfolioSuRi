import React from "react";
import "./Projects.css";
import irrigationImg from "../assets/smart-irrigation-tech.jpg";
import profileImg from "../assets/Portfolio.png";
import hiremeImg from "../assets/HireMe.png"; // You can change image later

const Projects = () => {
  const projects = [
    {
      title: "Smart Irrigation System",
      image: irrigationImg,
      description:
        "A smart irrigation system that automatically controls water supply based on soil moisture levels to reduce water wastage and improve efficiency.",
      technologies: "React, JavaScript, Node.js, IoT",
      github: "https://github.com/yourusername/irrigation-project",
    },
    {
      title: "Personal Portfolio Website",
      image: profileImg,
      description:
        "A responsive personal portfolio website to showcase my skills, projects, and contact details with modern UI design.",
      technologies: "React, CSS, JavaScript",
      github: "https://github.com/Surendra290/portfolioSuRi",
    },
    {
      title: "Hire Me - Web Development Website",
      image: hiremeImg,
      description:
        "A professional 'Hire Me' web development website designed to attract clients and showcase services like frontend development, responsive design, and UI creation.",
      technologies: "React, HTML, CSS, JavaScript",
      github: "https://github.com/yourusername/hireme-project",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> {project.technologies}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

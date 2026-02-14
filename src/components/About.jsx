import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p>
            I am a passionate developer with a strong interest in building
            clean, functional, and user-friendly web applications. My journey
            in technology began with curiosity about how systems work, and it
            has grown into a dedication to solving real-world problems through code.
          </p>

          <p>
            When I'm not coding, I enjoy exploring new technologies,
            improving my problem-solving skills, and contributing to projects
            that help me grow as a developer. I believe in continuous learning
            and staying updated with modern development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


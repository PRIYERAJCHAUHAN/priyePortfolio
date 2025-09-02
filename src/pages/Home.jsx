import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import "./Home.css"; // New CSS

const projects = [
  {
    id: 1,
    title: "Wanderlust",
    description: "A full-stack Wanderlust app using React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    image: "/assets/projects/wanderlust.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React.",
    tags: ["React", "CSS"],
    demo: "#",
    image: "/assets/projects/portfolio.png",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather app built with Node.js and Express.",
    tags: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    image: "/assets/projects/weather.jpg",
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Skills />

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

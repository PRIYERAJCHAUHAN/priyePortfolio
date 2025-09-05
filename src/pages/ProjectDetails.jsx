import React from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Wanderlust",
    description:
      "A Wanderlust app using React, Node.js, and MongoDB. Features include product management, shopping cart, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    image: "/assets/projects/wanderlust.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React to showcase projects, skills, and contact information.",
    tags: ["React", "CSS"],
    demo: "https://thriving-boba-1adc5d.netlify.app/",
    image: "/assets/projects/portfolio.png",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A weather app built with Node.js and Express. Users can check weather of anywhere.",
    tags: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    image: "/assets/projects/weather.jpg",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found!</p>;

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h2>{project.title}</h2>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", borderRadius: "5px", marginBottom: "1rem" }}
        />
      )}
      <p>{project.description}</p>
      <div style={{ marginTop: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "2px 6px",
              marginRight: "5px",
              borderRadius: "4px",
              fontSize: "0.8rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            textDecoration: "none",
            color: "#fff",
            background: "var(--secondary)",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          View Demo
        </a>
      )}
      <div style={{ marginTop: "1rem" }}>
        <Link to="/projects" style={{ color: "var(--primary)" }}>
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

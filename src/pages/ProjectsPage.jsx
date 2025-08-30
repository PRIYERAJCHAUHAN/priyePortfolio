import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce app using React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    image: "/assets/projects/ecommerce.png",
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
    title: "Blog Platform",
    description: "A blogging platform built with Node.js and Express.",
    tags: ["Node.js", "Express", "MongoDB"],
    demo: "#",
    image: "/assets/projects/blog.png",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h2>All Projects</h2>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "1rem",
        }}
      />
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

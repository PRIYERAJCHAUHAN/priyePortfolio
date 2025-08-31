import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img src={project.image} alt={project.title} />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <Link to={`/projects/${project.id}`} className="details">Details</Link>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="demo">Demo</a>}
      </div>
    </div>
  );
}

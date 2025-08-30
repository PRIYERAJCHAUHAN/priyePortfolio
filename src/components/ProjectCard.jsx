import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        marginBottom: "1.5rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "0.8rem",
            objectFit: "cover",
            maxHeight: "200px",
          }}
        />
      )}
      <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
      <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>{project.description}</p>
      <div style={{ marginBottom: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "2px 8px",
              marginRight: "5px",
              borderRadius: "4px",
              fontSize: "0.8rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        <Link
          style={{
            textDecoration: "none",
            color: "#fff",
            background: "var(--primary)",
            padding: "5px 12px",
            borderRadius: "5px",
            marginRight: "5px",
            fontSize: "0.85rem",
          }}
          to={`/projects/${project.id}`}
        >
          Details
        </Link>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "var(--secondary)",
              padding: "5px 12px",
              borderRadius: "5px",
              fontSize: "0.85rem",
            }}
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

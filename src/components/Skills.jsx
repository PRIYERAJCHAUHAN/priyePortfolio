import React from "react";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "SQL",
  "RESTful APIs",
];

export default function Skills() {
  return (
    <section style={{ padding: "2rem 0" }}>
      <h2 style={{ marginBottom: "1rem" }}>My Skills</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.8rem",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              background: "var(--primary)",
              color: "#fff",
              fontWeight: "500",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

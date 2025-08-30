import React from "react";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h2>My Resume</h2>
      <button
        onClick={handlePrint}
        style={{
          background: "var(--primary)",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Print / Save as PDF
      </button>

      <section style={{ border: "1px solid #ddd", padding: "1rem" }}>
        <h3>Priye Raj</h3>
        <p>Email: priyeraj@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <h4>Skills</h4>
        <ul>
          <li>JavaScript, React.js, Node.js, MongoDB</li>
          <li>HTML, CSS</li>
          <li>Express.js, RESTful APIs</li>
        </ul>
        <h4>Experience</h4>
        <p>Quality Analyst at Provana India Private LTD</p>
        <h4>Projects</h4>
        <ul>
          <li>E-commerce Website</li>
          <li>Portfolio Website</li>
          <li>Blog Platform</li>
        </ul>
      </section>
    </div>
  );
}

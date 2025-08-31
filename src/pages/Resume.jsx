import React from "react";
import "./Resume.css"; // New CSS

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <button onClick={handlePrint} className="print-btn">
        Print / Save as PDF
      </button>

      <section className="resume-content">
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

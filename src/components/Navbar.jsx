import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">Priye Raj</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <button
          onClick={toggleDarkMode}
          style={{
            background: "#fff",
            color: "#222",
            padding: "5px 10px",
            borderRadius: "5px",
            marginLeft: "1rem",
          }}
        >
          🌓
        </button>
      </div>
    </nav>
  );
}

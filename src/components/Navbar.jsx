import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <Link to="/">Priye Raj</Link>
        </div>
      </div>

      <div className="nav-right">
        
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <button onClick={toggleDarkMode} className="darkmode-btn">
          🌓
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

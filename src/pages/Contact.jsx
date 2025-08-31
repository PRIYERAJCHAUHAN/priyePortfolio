import React, { useState } from "react";
import "./Contact.css"; // Add this new CSS file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been received.\n\n(For real submissions, integrate EmailJS or backend later)`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

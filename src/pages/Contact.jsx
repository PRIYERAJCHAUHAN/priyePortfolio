import React, { useState } from "react";

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
    <div className="container" style={{ padding: "2rem 0" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", marginBottom: "1rem" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", marginBottom: "1rem" }}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", marginBottom: "1rem" }}
        />

        <button
          type="submit"
          style={{
            background: "var(--primary)",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

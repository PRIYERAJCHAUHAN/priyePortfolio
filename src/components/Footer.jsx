import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Priye Raj. All Rights Reserved.</p>
      <div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=priyeraj@example.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/priyeraj"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/priyeraj"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

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
          href="https://github.com/PRIYERAJCHAUHAN"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/priye-raj-511638140/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

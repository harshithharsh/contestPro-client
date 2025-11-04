import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="left">© {new Date().getFullYear()} ContestPro</div>
      <div className="right">
        <a href="#" onClick={(e) => e.preventDefault()}>
          Help
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Terms
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Contact
        </a>
      </div>
    </footer>
  );
}
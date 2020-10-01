import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 fixed-bottom">
        <div className="container">
          <span className="text-muted">
            <a href="mailto:melindawinter42@gmail.com" target="_blank">
              <i className="fas fa-envelope contactIcon"></i>
            </a>
            <a href="https://github.com/melindawinter" target="_blank">
              <i className="fab fa-github contactIcon"></i>
            </a>
            <a
              href="http://www.linkedin.com/in/melinda-winter-34a25689"
              target="_blank"
            >
              <i className="fab fa-linkedin contactIcon"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

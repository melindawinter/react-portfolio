import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer class="footer mt-auto py-3 fixed-bottom">
        <div class="container">
          <span class="text-muted">
            <a href="mailto:melindawinter42@gmail.com">
              <img src="assets/images/gmail-icon-24.png" alt="gmail icon" />
            </a>
            <a href="https://github.com/melindawinter" target="_blank">
              <img src="assets/images/octocat24.png" alt="github icon" />
            </a>
            <a
              href="http://www.linkedin.com/in/melinda-winter-34a25689"
              target="_blank"
            >
              <img src="assets/images/linkedin.png" alt="linkedin icon" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

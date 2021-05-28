import * as React from "react";
import "../styles/ComponentFooter.css";

import { Wave } from "../components";
import { IconGithub } from "../assets/icons";

const Footer = () => {
  return (
    <footer id="footer-container">
      <Wave orientation="bottom" />
      <div id="footer-source-code-section">
        <section>
          <p>
            The front-end code of this website is available on github here{" "}
            <IconGithub clickable />
          </p>
          <h4>Section 1 footer</h4>
        </section>
        <section>Want to contact me ?</section>
      </div>
    </footer>
  );
};

export default Footer;

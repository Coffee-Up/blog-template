import * as React from "react";
import "../styles/ComponentFooter.css";

import { Wave } from "../components";

const Footer = () => {
  return (
    <footer id="footer-container">
      <Wave classWave="wave-bottom" id="wave-footer" />
      <div>
        <section>
          <h4>Section 1 footer</h4>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

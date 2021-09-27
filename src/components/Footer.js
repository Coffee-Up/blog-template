import * as React from "react";
import "../styles/Footer.css";

import Wave  from "../components/Wave";

const Footer = () => {
  return (
    <footer>
      <Wave orientation="bottom" />
      <div>
        <section>
          <h2>Merci à Nos Partenaires</h2>
        </section>
        <section id="footer-section-fonts-container"></section>
      </div>
      <p id="footer-copyright-text">Copyright © Axel Daguerre.</p>
    </footer>
  );
};

export default Footer;

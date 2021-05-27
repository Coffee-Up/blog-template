import * as React from "react";
import "../styles/ComponentFooter.css";

import { Wave } from "../components";

export default function Footer() {
  return (
    <footer id="footer-container">
      <Wave />
      <div>
        <section>
          <h4>Section 1 footer</h4>
        </section>
      </div>
    </footer>
  );
}

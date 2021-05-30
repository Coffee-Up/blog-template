import * as React from "react";
import "../styles/PageContact.css";

import { Layout } from "../components";

export default function ContactPage() {
  return (
    <Layout defaultBanner={true}>
      <div id="contact-page-container">
        <p id="contact-page-introduction">
          Hi, I have built this website mainly to{" "}
          <span>organize my thougths</span>, going
          <span> deeper</span> in my learnings & <span>share</span> what I do if
          it can helps someone in any way.
        </p>
      </div>
    </Layout>
  );
}

import * as React from "react";
import "../styles/ComponentFooter.css";
import { useStaticQuery, graphql } from "gatsby";

import { Wave } from "../components";
import { IconGithub } from "../assets/icons";

const Footer = () => {
  const { site } = useStaticQuery(query);
  const { frontEndUrl } = site.siteMetadata;

  return (
    <footer id="footer-container">
      <Wave orientation="bottom" />
      <div id="footer-text-container">
        <section id="footer-section-source-code">
          <p>
            Source Code Website's
            <div id="footer-github-logo">
              <a href={frontEndUrl} target="_blank" rel="noopener noreferrer">
                <IconGithub clickable />
              </a>
            </div>
          </p>
        </section>
        <section>Want to contact me ?</section>
      </div>
    </footer>
  );
};

const query = graphql`
  query github {
    site {
      siteMetadata {
        frontEndUrl
      }
    }
  }
`;

export default Footer;

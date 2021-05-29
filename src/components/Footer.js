import * as React from "react";
import "../styles/ComponentFooter.css";
import { useStaticQuery, graphql } from "gatsby";

import { Wave, Avatar } from "../components";
import { IconGithub, IconFont } from "../assets/icons";

const Footer = () => {
  const { site } = useStaticQuery(query);
  const { frontEndRepositoryUrl, fontUrl1, fontUrl2 } = site.siteMetadata;

  return (
    <footer id="footer-container">
      <Wave orientation="bottom" />
      <div id="footer-wrapper">
        <section id="footer-section-source-code">
          <p id="footer-source-code-text">Website Source Code</p>
          <div id="footer-github-logo-container">
            <a
              href={frontEndRepositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub customTitle="Website Source Code" clickable />
            </a>
          </div>
        </section>
        <section id="footer-section-contact">
          <p>Want to contact me ?</p>
          <Avatar prefixId="footer-" />
        </section>
        <section id="footer-section-fonts-repo">
          <p id="footer-text-fonts-repo">Like my website's fonts ?</p>
          <a href={fontUrl1} target="_blank" rel="noopener noreferrer">
            <IconFont customTitle="Source Code Pro Repository" clickable />
          </a>
          <a href={fontUrl2} target="_blank" rel="noopener noreferrer">
            <IconFont customTitle="Montserrat Web Repository" clickable />
          </a>
          <a href={fontUrl3} target="_blank" rel="noopener noreferrer">
            <IconFont customTitle="Cascadia Code Repository" clickable />
          </a>
        </section>
      </div>
    </footer>
  );
};

const query = graphql`
  query github {
    site {
      siteMetadata {
        frontEndRepositoryUrl
        fontUrl1
        fontUrl2
        fontUrl3
      }
    }
  }
`;

export default Footer;

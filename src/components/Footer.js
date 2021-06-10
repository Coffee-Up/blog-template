import * as React from "react";

import "../styles/Footer.css";
import { Wave, Avatar } from "../components";
import { IconGithub, IconTwitter } from "../assets/icons";

const Footer = ({ backgroundColor, fillColorSVG, urls }) => {
  const {
    frontEndRepositoryUrl,
    firaCodeUrl,
    interUrl,
    githubProfileUrl,
    twitterProfileUrl,
  } = urls;

  return (
    <footer style={{ backgroundColor }}>
      <Wave orientation="bottom" fillColorSVG={fillColorSVG} />
      <div>
        <section>
          <h5>Website Source Code</h5>
          <a
            href={frontEndRepositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub customTitle="Website Source Code" clickable={true} />
          </a>
        </section>
        <section>
          <h5>Want to contact me ?</h5>
          <div>
            <Avatar clickable size="small" />
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub customTitle="My Github Account" clickable={true} />
            </a>
            <a
              href={twitterProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter customTitle="My Twitter Account" clickable={true} />
            </a>
          </div>
        </section>
        <section id="footer-section-fonts-container">
          <h5>Like my website's fonts ?</h5>
          <a href={firaCodeUrl} target="_blank" rel="noopener noreferrer">
            Fira Code
          </a>
          <span>===</span>
          <a href={interUrl} target="_blank" rel="noopener noreferrer">
            Inter
          </a>
        </section>
      </div>
      <p id="footer-copyright-text">Copyright © Axel Daguerre.</p>
    </footer>
  );
};

export default Footer;

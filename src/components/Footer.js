import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../styles/Footer.css";
import { Wave, Avatar } from "../components";
import { IconGithub, IconFont } from "../assets/icons";

const Footer = ({ backgroundColor, fillColorSVG }) => {
  const { site } = useStaticQuery(query);
  const { frontEndRepositoryUrl, fontUrl1, fontUrl2, fontUrl3 } =
    site.siteMetadata;

  return (
    <footer id="footer-container" style={{ backgroundColor }}>
      <Wave fillColorSVG={fillColorSVG} waveOrientation="bottom" />
      <div id="footer-wrapper">
        <section>
          <p>Website Source Code</p>
          <a
            href={frontEndRepositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub customTitle="Website Source Code" clickable={true} />
          </a>
        </section>
        <section>
          <p>Want to contact me ?</p>
          <Avatar clickable small />
        </section>
        <section>
          <p>Like my website's fonts ?</p>
          <a href={fontUrl1} target="_blank" rel="noopener noreferrer">
            #1
            <IconFont
              customTitle="Source Code Pro Repository"
              clickable={true}
            />
          </a>
          <a href={fontUrl2} target="_blank" rel="noopener noreferrer">
            #2
            <IconFont
              customTitle="Montserrat Web Repository"
              clickable={true}
            />
          </a>
          <a href={fontUrl3} target="_blank" rel="noopener noreferrer">
            #3
            <IconFont customTitle="Cascadia Code Repository" clickable={true} />
          </a>
        </section>
        <section>
          <p id="footer-copyright-text">Copyright © Axel Daguerre.</p>
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

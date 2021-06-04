import * as React from "react";
import { graphql } from "gatsby";

import "../styles/ContactPage.css";

import { Layout } from "../components";
import { IconTwitter, IconGithub, IconEmail } from "../assets/icons";

export default function ContactPage({ data }) {
  const { github, twitter, email } = data.site.siteMetadata.urls;
  return (
    <Layout defaultBanner={true}>
      <div id="contact-page-container">
        <h1>Contact me</h1>
        <p>
          I am a web developer but I'm not considering myself as one. In fact I
          am more interested in <span>hardware,</span>
          <span> space</span>,<span> art</span> and so much more as you will see
          through my articles.
        </p>

        <p id="contact-page-introduction">
          I have built this website mainly to <span>organize my thougths</span>,
          going
          <span> deeper</span> in my learnings & <span>share</span> what I do if
          it can helps someone in any ways possible.
        </p>
        <p>
          If you want to contact me to talk about anything, you can reach me
          from the <span>links below</span> or you can even use the comment
          section below each posts, you don't have to login anywhere as it is a
          self-made commentary section that preserve your entire privacy, by
          just saving the text comment or username if you provide it. In fact
          there is no tracking service on my website.
        </p>
        <div id="contact-page-social-container">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <IconTwitter clickable />
            <p>Twitter Profil</p>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <IconGithub customTitle="My Github Profil" clickable />
            <p>Github Profil</p>
          </a>
          <a
            href={`mailto:${email}?Subject="Hello Axel, I am ..."`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconEmail clickable />
            <p>{email}</p>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        urls {
          github
          twitter
          email
        }
      }
    }
  }
`;

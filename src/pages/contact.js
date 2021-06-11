import * as React from "react";
import { graphql } from "gatsby";
import "../styles/ContactPage.css";

import { Layout, Sidebar } from "../components";
import { IconTwitter, IconGithub, IconEmail } from "../assets/icons";

export default function ContactPage({ data }) {
  const { github, twitter, email } = data.site.siteMetadata.urls;

  return (
    <Layout bannerImage={data.file.childImageSharp} bannerTitle="Connect">
      <Sidebar side="left" />
      <div id="contact-page-container">
        <p>
          I am a web developer but I'm not considering myself as one. In fact
          I'm more interested in <span>Hardware,</span>
          <span> Space</span>,<span> Art</span> and so much more as you will see
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
          </a>
          <p>Twitter Profile</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <IconGithub customTitle="My Github Profil" clickable />
          </a>
          <p>Github Profile</p>
          <a
            href={`mailto:${email}?Subject="Hello Axel, I am ..."`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconEmail clickable />
          </a>
          <p>{email}</p>
        </div>
        <p>
          If you spot any bugs, bad english sentences (English is not my native
          language) please let me know, it will help me to have a better user
          experience & improve my english.{" "}
        </p>
      </div>
      <Sidebar side="right" />
    </Layout>
  );
}

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        urls {
          githubProfileUrl
          twitterProfileUrl
          email
        }
      }
    }
    file(relativePath: { eq: "banner-home.png" }) {
      childImageSharp {
        gatsbyImageData(height: 800, placeholder: NONE, formats: [PNG])
      }
    }
  }
`;

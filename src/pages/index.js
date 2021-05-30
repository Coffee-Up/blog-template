import * as React from "react";
import "../styles/PageIndex.css";

import { Layout, PostsFilterWidget, Avatar } from "../components";

export default function IndexPage({ location }) {
  return (
    <Layout pathUrl={location.pathname} defaultBanner={true}>
      <div id="index-page-wrapper">
        <div id="index-page-welcome-title-container">
          <Avatar customIdCSS="index-avatar" big clickable />
          <p>Hi, I'm Axel.</p>
          <h1>
            You will find posts about all my interests : <span>Science</span>,{" "}
            <span>Programmation</span>, <span>Art</span> & <span>More</span>.
          </h1>
        </div>
        <br />
        <PostsFilterWidget />
      </div>
    </Layout>
  );
}

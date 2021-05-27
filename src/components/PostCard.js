import * as React from "react";
import "../styles/PostCard.css";
import { Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function PostCard({ path, img, title, id, summary }) {
  const image = getImage(img);

  return (
    <>
      <Link key={id} id="post-card-link" to={path}>
        <div id="post-card-image">
          <GatsbyImage image={image} alt="TO DO" />
        </div>
        <header>
          <h2 id="post-card-title">{title}</h2>
        </header>
        <p id="post-card-summary">{summary}</p>
      </Link>
    </>
  );
}

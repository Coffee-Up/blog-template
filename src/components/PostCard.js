import * as React from "react";
import "../styles/ComponentPostCard.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { TagSymbol } from "../components";

export default function PostCard({ path, img, title, id, summary, date }) {
  const image = getImage(img);

  return (
    <>
      <div>
        <Link key={id} id="post-card-link" to={path}>
          <div id="post-card-image">
            <GatsbyImage image={image} alt="TO DO" />
          </div>
          <div id="post-card-overview-container">
            <h2 id="post-card-title">{title}</h2>
            <p id="post-card-summary">{summary}</p>
          </div>
          <div id="post-card-data-container">
            <TagSymbol tagName="learning" id="post-card-tag-logo" />
            <span id="post-card-date">{date}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

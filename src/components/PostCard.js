import * as React from "react";
import "../styles/PostCard.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { TagSymbol } from "../components";

export default function PostCard({ path, img, title, id, summary, date }) {
  const image = getImage(img);

  return (
    <>
      <Link key={id} id="post-card-link" to={path}>
        <div id="post-card-image">
          <GatsbyImage image={image} alt="TO DO" />
        </div>
        <div id="post-card-overview-container">
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        <div id="post-card-data-container">
          <TagSymbol tagName="learning" />
          <span>{date}</span>
        </div>
      </Link>
    </>
  );
}

import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../styles/PostCard.css";
import { TagSymbol } from "../components";

export default function PostCard({
  keyId,
  path,
  img,
  title,
  summary,
  creationDate,
}) {
  const image = getImage(img);

  return (
    <li key={keyId} className="g-hover-animation-item post-card-item-container">
      <Link className="post-card-link" to={`post/${path}`}>
        <div className="post-card-overview-container">
          <div>
            <GatsbyImage as="div" image={image} alt="TO DO" />
          </div>
          <h2>{title}</h2>
          <hr />
          <p>{summary}</p>
          <p className="creation-date">
            {creationDate.day}/{creationDate.month}/{creationDate.year}
          </p>
        </div>
        <TagSymbol tagName="learning" />
      </Link>
    </li>
  );
}

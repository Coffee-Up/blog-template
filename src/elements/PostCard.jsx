import * as React from "react";
import "../styles/PostCard.css";
import { Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function PostCard({ path, picture, title, id, resume }) {
  const image = getImage(picture);

  return (
    <div className="post-card-container" key={id}>
      <Link to={path}>
        <GatsbyImage image={image} alt="a changer" />
        <header>
          <h2>{title}</h2>
        </header>
        <p>{resume}</p>
      </Link>
    </div>
  );
}

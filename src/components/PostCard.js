import * as React from "react";
import "../styles/PostCard.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { TagSymbol } from "../components";
import { IconMinus } from "../assets/icons";

export default function PostCard({ path, img, title, id, summary, date }) {
  // TO DO: find a more readable manipulation
  // Get something like "20210306"
  // ----------------------------------------------------
  // const rawDatePart = date
  //   .split("-")
  //   .slice(0, 10)
  //   .join("")
  //   .split("T")
  //   .slice(0, 1)
  //   .join("");

  // const yearCreation = rawDatePart.split("").slice(0, 4).join("");
  // const monthCreation = rawDatePart.split("").slice(4, 6).join("");
  // const dayCreation = rawDatePart.split("").slice(6, 8).join("");

  const image = getImage(img);
  // TO DO: I don't like that much of divs (readability)
  return (
    <>
      <Link key={id} id="post-card-link" to={path}>
        <div id="post-card-overview-container">
          <div>
            <GatsbyImage as="div" image={image} alt="TO DO" />
          </div>
          <h2>{title}</h2>
          <hr />
          <p>{summary}</p>
        </div>
        <TagSymbol tagName="learning" />
      </Link>
    </>
  );
}

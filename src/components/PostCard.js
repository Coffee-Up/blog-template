import * as React from "react";
import "../styles/PostCard.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { TagSymbol } from "../components";
import { IconMinus } from "../assets/icons";

export default function PostCard({ path, img, title, id, summary, date }) {
  // TO DO: find a more readable manipulation
  // Get something like "20210306"
  const rawDatePart = date
    .split("-")
    .slice(0, 10)
    .join("")
    .split("T")
    .slice(0, 1)
    .join("");

  const yearCreation = rawDatePart.split("").slice(0, 4).join("");
  const monthCreation = rawDatePart.split("").slice(4, 6).join("");
  const dayCreation = rawDatePart.split("").slice(6, 8).join("");
  console.log(monthCreation);
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
          <div>
            <p>{dayCreation}</p>
            <IconMinus />
            <p>{monthCreation}</p>
            <IconMinus />
            <p>{yearCreation}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

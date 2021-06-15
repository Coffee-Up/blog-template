import * as React from "react";
import { Link } from "gatsby";
import "../styles/PostCard.css";

import { TagSymbol } from "../components";

const PostCard = ({ keyId, path, title, creationDate, mainTag }) => {
  return (
    <div
      key={keyId}
      className="g-hover-animation-item post-card-item-container"
    >
      <Link className="post-card-link" to={`post/${path}`}>
        <h2>{title}</h2>
        <p className="creation-date">{creationDate}</p>
        <TagSymbol tagName={mainTag} />
      </Link>
    </div>
  );
};

export default PostCard;

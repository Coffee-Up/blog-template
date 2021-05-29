import * as React from "react";
import "../styles/ComponentAvatar.css";
import { Link } from "gatsby";

import profileImage from "../assets/images/me.jpg";

export default function Avatar({ uniquePreIdentifier, clickable }) {
  return (
    <div
      id={`${uniquePreIdentifier}-avatar`}
      className="g-mask-image-circular g-hover-animation-logo g-avatar"
    >
      <Link to="/contact">
        <img src={profileImage} alt="me thinking on the beach" />
      </Link>
    </div>
  );
}

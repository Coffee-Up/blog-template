import * as React from "react";
import "../styles/Avatar.css";
import { Link } from "gatsby";

import profileImage from "../assets/images/me.jpg";

export default function Avatar({ size, clickable }) {
  return (
    <div
      className={`avatar-${size} avatar-div g-mask-image-circular g-hover-animation-logo`}
    >
      <Link to="/contact">
        <img
          className={
            clickable ? `g-clickable-image g-avatar-image` : "g-avatar-image"
          }
          src={profileImage}
          alt="Me on the beach"
        />
      </Link>
    </div>
  );
}

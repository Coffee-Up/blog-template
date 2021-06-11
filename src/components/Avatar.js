import * as React from "react";
import { Link } from "gatsby";
import "../styles/Avatar.css";

import profileImage from "../assets/images/me.jpg";

const Avatar = ({ size, clickable }) => {
  return (
    <div
      className={`avatar-${size} avatar-div g-mask-image-circular g-hover-animation-logo`}
    >
      <Link to="/contact">
        <img
          className={`g-image-clickable-${clickable} g-avatar-image`}
          src={profileImage}
          alt="Me on the beach"
        />
      </Link>
    </div>
  );
};

export default Avatar;

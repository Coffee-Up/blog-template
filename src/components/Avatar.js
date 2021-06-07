import * as React from "react";
import "../styles/Avatar.css";
import { Link } from "gatsby";

import profileImage from "../assets/images/me.jpg";

export default function Avatar({ small, big, clickable, customIdCSS }) {
  return (
    <div
      id={customIdCSS}
      style={
        big
          ? { width: "2.5rem", height: "2.5rem" }
          : small
          ? { width: "2.3rem", height: "2.3rem" }
          : { width: "1rem", height: "1rem" }
      }
      className="avatar-div g-mask-image-circular g-hover-animation-logo"
    >
      <Link to="/contact">
        <img
          className={
            clickable ? `g-clickable-image g-avatar-image` : "g-avatar-image"
          }
          src={profileImage}
          alt="Contact page"
        />
      </Link>
    </div>
  );
}

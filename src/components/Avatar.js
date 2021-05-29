import * as React from "react";
import "../styles/ComponentAvatar.css";
import { Link } from "gatsby";

import profileImage from "../assets/images/me.jpg";

export default function Avatar({ small, big, clickable }) {
  return (
    <div
      style={
        big
          ? { width: "3.1rem", height: "3.1rem" }
          : small
          ? { width: "2.7rem", height: "2.7r  em" }
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
          alt="me thinking on the beach"
        />
      </Link>
    </div>
  );
}

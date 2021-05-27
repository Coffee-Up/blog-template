import * as React from "react";
import "../styles/Avatar.css";
import { Link } from "gatsby";

import profileImage from "../assets/images/me.jpg";

export default function Avatar() {
  return (
    <div className="g-mask-image-circular" id="avatar-container">
      <Link to="/contact">
        <img src={profileImage} alt="me thinking on the beach" />
      </Link>
    </div>
  );
}

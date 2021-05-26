import * as React from "react";
import "../styles/Avatar.css";

import profileImage from "../assets/images/me.jpg";

export default function Avatar() {
  return (
    <div id="avatar-container" className="g-mask-image-circular">
      <img src={profileImage} alt="me thinking on the beach" />
    </div>
  );
}

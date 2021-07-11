import React from "react";

const IconFacebook = ({ id, clickable }) => (
  <svg
    id={id}
    className={
      clickable ? `g-hover-animation-logo g-logo-clickable-${clickable}` : ""
    }
    viewBox="0 0 408.8 408.8"
    role="link"
    aria-hidden="false"
    focusable="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="151" y="50" fill="#F9F9F9" width="188" height="358.8" />
    <path
      fill="#475993"
      d="M353.7,0H55.1C24.7,0,0,24.7,0,55.1v298.6c0,30.4,24.7,55.1,55.1,55.1h147.3l0.3-146.1h-38
	c-4.9,0-8.9-4-9-8.9l-0.2-47.1c0-5,4-9,9-9h37.9v-45.5c0-52.8,32.2-81.6,79.3-81.6h38.6c4.9,0,9,4,9,9v39.7c0,4.9-4,9-9,9l-23.7,0
	c-25.6,0-30.6,12.2-30.6,30v39.4h56.3c5.4,0,9.5,4.7,8.9,10l-5.6,47.1c-0.5,4.5-4.4,7.9-8.9,7.9h-50.5l-0.3,146.1h87.6
	c30.4,0,55.1-24.7,55.1-55.1V55.1C408.8,24.7,384.1,0,353.7,0z"
    />
  </svg>
);

export default IconFacebook;

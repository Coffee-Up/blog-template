import React from "react";

const IconArrow = ({ className, size, idGived, clickable }) => (
  <svg
    id={idGived}
    className={
      clickable ? "g-hover-animation-color-svg-arrow icon-arrow" : "icon-arrow"
    }
    viewBox="0 0 24 24"
    role="link"
    aria-hidden="false"
    focusable="true"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
  >
    <title>ArrowIosDownwardOutline icon</title>
    <path
      className={className}
      d="M12 16a1 1 0 01-.64-.23l-6-5a1 1 0 111.28-1.54L12 13.71l5.36-4.32a1 1 0 011.41.15 1 1 0 01-.14 1.46l-6 4.83A1 1 0 0112 16z"
      data-name="arrow-ios-downward"
    ></path>
  </svg>
);

export default IconArrow;

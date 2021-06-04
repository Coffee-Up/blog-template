import React from "react";

const IconWebsite = ({ idGived, clickable }) => (
  <svg
    id={idGived}
    className={
      clickable ? "g-hover-animation-logo g-hover-logo-fill-color" : ""
    }
    viewBox="0 0 32.58 31.77"
    role="link"
    aria-hidden="false"
    focusable="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <title>Return To Home Page</title>
    <path
      fill="#FFA700"
      d="M15.4 1.3c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 21.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c0 4.2-3.3 7.5-7.5 7.5z"
    />
    <circle fill="#FFF" cx="15.4" cy="15.3" r="7.5" />
    <circle fill="#44282A" cx="17" cy="18" r="4" />
    <circle fill="#FFF" cx="16" cy="16" r="1" />
  </svg>
);

export default IconWebsite;

import React from "react";

const IconEmail = ({ clickable }) => (
  <svg
    className={clickable ? "g-hover-animation-logo " : ""}
    viewBox="0 0 64 64"
    role="link"
    aria-hidden="false"
    focusable="true"
    preserveAspectRatio="xMidYMid meet"
    width="2rem"
  >
    <title>My Email Adress</title>
    <path
      d="m34.78 46.32a4.017 4.017 0 0 1 -5.56 0l-5.51-5.32-19.517 18.847a3.984 3.984 0 0 0 2.807 1.153h50a3.984 3.984 0 0 0 2.807-1.153l-19.517-18.847z"
      fill="#9bc9ff"
    />
    <path
      d="m59.807 22.153-19.517 18.847 19.517 18.847a3.987 3.987 0 0 0 1.193-2.847v-32a3.987 3.987 0 0 0 -1.193-2.847z"
      fill="#bddbff"
    />
    <path
      d="m4.193 22.153a3.987 3.987 0 0 0 -1.193 2.847v32a3.987 3.987 0 0 0 1.193 2.847l19.517-18.847z"
      fill="#bddbff"
    />
    <path
      d="m29.22 46.32a4.017 4.017 0 0 0 5.56 0l5.51-5.32 19.517-18.847a3.984 3.984 0 0 0 -2.807-1.153h-50a3.984 3.984 0 0 0 -2.807 1.153l19.517 18.847z"
      fill="#57a4ff"
    />
    <path d="m40 35v-14-4h6l-14-14-14 14h6v4 14z" fill="#ff3051" />
    <path
      d="m4.193 59.847a3.984 3.984 0 0 0 2.807 1.153h26a33.736 33.736 0 0 1 -22.025-7.7z"
      fill="#57a4ff"
    />
    <path
      d="m3 37v20a3.987 3.987 0 0 0 1.193 2.847l6.782-6.547c-4.949-4.281-7.975-10-7.975-16.3z"
      fill="#9bc9ff"
    />
  </svg>
);

export default IconEmail;

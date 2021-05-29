import React from "react";

const IconFont = ({ clickable, prefixId, customClasses, customTitle }) => (
  <svg
    className={
      clickable
        ? `g-hover-animation-logo g-hover-logo-fill-color ${customClasses}`
        : ""
    }
    id={prefixId ? `${prefixId}icon-font` : ""}
    viewBox="0 0 512 512"
    role="link"
    aria-hidden="false"
    focusable="true"
    preserveAspectRatio="xMidYMid meet"
    height="1.5em"
    width="1.5em"
  >
    {customTitle && <title>{customTitle}</title>}
    <path
      className="logo-path-to-fill"
      d="M464.7 457l-194-432h-29.6l-186 432H0v30h160v-30H87.8l47.8-111H312l49.8 111H312v30h200v-30h-47.3zM148.5 316l73.4-170.5L298.5 316h-150z"
    />
  </svg>
);

export default IconFont;

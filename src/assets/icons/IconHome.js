import React from "react";

const IconHome = ({ clickable, customTitle, id }) => (
  <svg
    id={id}
    className={`g-logo-clickable-${clickable} g-logo-path-to-fill-white`}
    viewBox="0 0 32.58 31.77"
    role="link"
    aria-hidden="false"
    focusable="true"
    preserveAspectRatio="xMidYMid meet"
  >
    {customTitle && <title>{customTitle}</title>}
    <path
      className="logo-path-to-fill"
      d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 00-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 001 1h3a1 1 0 001-1v-4h4v4a1 1 0 001 1h3a1 1 0 001-1v-7h2a.998.998 0 00.743-1.669z"
    />
  </svg>
);

export default IconHome;

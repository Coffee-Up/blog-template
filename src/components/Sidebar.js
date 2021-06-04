import React from "react";

import "../styles/Sidebar.css";

const Sidebar = ({ customData, side }) => {
  const isLeft = side === "left";

  return (
    <>
      <div id={isLeft ? "sidebar-left-container" : "sidebar-right-container"}>
        {customData && <p>{customData}</p>}
      </div>
    </>
  );
};

export default Sidebar;

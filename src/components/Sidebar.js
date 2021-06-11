import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ customData, side }) => {
  return (
    <>
      <div id={`sidebar-container-${side}`}>
        {customData && <p>{customData}</p>}
      </div>
    </>
  );
};

export default Sidebar;

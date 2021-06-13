import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ side, children }) => {
  return (
    <>
      <div id={`sidebar-container-${side}`}>{children}</div>
    </>
  );
};

export default Sidebar;

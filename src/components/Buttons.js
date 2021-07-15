import React from "react";
import "../styles/Buttons.css";

const ActionButton = ({ onClick, children, className }) => {
  return (
    <button className={`button-action ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { ActionButton };

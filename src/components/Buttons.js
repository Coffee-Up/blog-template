import React from "react";
import "../styles/Buttons.css";

const ActionButton = ({ onClick, children, className }) => {
  return (
    <button className={`button-action ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const SubmitButton = ({ onClick, children }) => {
  return (
    <button className="button-submit" onClick={onClick}>
      {children}
    </button>
  );
};

const CloseModalButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
export { SubmitButton, CloseModalButton, ActionButton };

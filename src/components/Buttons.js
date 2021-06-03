import React from "react";

import "../styles/Buttons.css";

const ActionButton = ({ onClickHerited, children, classNameHerited }) => {
  return (
    <button
      className={`button-action ${classNameHerited}`}
      onClick={onClickHerited}
    >
      {children}
    </button>
  );
};

const SubmitButton = ({ onClickHerited, children }) => {
  return (
    <button className="button-submit" onClick={onClickHerited}>
      {children}
    </button>
  );
};

const CloseModalButton = ({ onClickHerited, children }) => {
  return <button onClick={onClickHerited}>{children}</button>;
};
export { SubmitButton, CloseModalButton, ActionButton };

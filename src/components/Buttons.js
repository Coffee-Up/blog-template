import React from "react";
import "../styles/Buttons.css";

const SubmitButton = ({ onClickHerited, children }) => {
  return <button onClick={onClickHerited}>{children}</button>;
};

const CloseModalButton = ({ onClickHerited, children }) => {
  return <button onClick={onClickHerited}>{children}</button>;
};
export { SubmitButton, CloseModalButton };

import React, { useState } from "react";
import "../styles/Buttons.css";
import { IconArrow } from "../assets/icons";

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

const DropDownButton = ({ children, options, customFunction }) => {
  const [isOpen, updateIsOpen] = useState(false);
  const [currentOption, updateCurrentOption] = useState(null);

  const onClickDropDown = () => {
    updateIsOpen(!isOpen);
  };

  const onSelectOption = ($event) => {
    updateCurrentOption($event.target.innerHTML);
    customFunction(currentOption);
  };

  return (
    <div className="drop-down-container">
      <button className="drop-down-button" onClick={onClickDropDown}>
        {currentOption ? currentOption : children}
      </button>
      <ul>
        {options.map((el, index) => {
          return (
            <li
              key={index}
              className={`button-drop-down-item-options button-drop-down-open-${isOpen}`}
            >
              <button onClick={($event) => onSelectOption($event)}>{el}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { DropDownButton, SubmitButton, CloseModalButton, ActionButton };

import React from "react";
import "../styles/Inputs.css";
import theme from "../theme.js";

const inputFormStyles = {
  boxShadow: `${theme.boxShadows.formInputs}`,
};

const FormInput = ({ inputName, customOnChange, inputPlaceholder, value }) => {
  //The parent Form component pass a props called onChange
  return (
    <>
      <input
        style={inputFormStyles}
        className="form-input"
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={customOnChange}
        value={value}
      />
    </>
  );
};

export { FormInput };

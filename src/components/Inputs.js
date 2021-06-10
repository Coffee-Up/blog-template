import React from "react";
import "../styles/Inputs.css";

const FormInput = ({ inputName, customOnChange, inputPlaceholder, value }) => {
  //The parent Form component pass a props called onChange
  return (
    <>
      <input
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

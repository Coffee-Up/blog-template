import React from "react";
import "../styles/Inputs.css";

const FormInput = ({ inputName, onChange, inputPlaceholder, value }) => {
  return (
    <>
      <input
        className="form-input"
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export { FormInput };

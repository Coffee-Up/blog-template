import React from "react";

const FormInput = ({ inputName, customOnChange, inputPlaceholder, value }) => {
  //The parent Form component pass a props called onChange
  return (
    <>
      <input
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={customOnChange}
        value={value}
      />
    </>
  );
};

export { FormInput };

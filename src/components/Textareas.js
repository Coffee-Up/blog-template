import React from "react";
import "../styles/Textareas.css";

const FormTextarea = ({
  customOnChange,
  textareaName,
  textareaPlaceholder,
  value,
}) => {
  //The parent Form component pass a props called onChange
  return (
    <>
      <textarea
        name={textareaName}
        placeholder={textareaPlaceholder}
        onChange={customOnChange}
        value={value}
      />
    </>
  );
};

export { FormTextarea };

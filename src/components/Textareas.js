import React from "react";

import "../styles/Textareas.css";

const FormTextarea = ({
  customOnChange,
  textareaName,
  textareaPlaceholder,
  value,
}) => {
  return (
    <>
      <textarea
        id="form-textarea"
        name={textareaName}
        placeholder={textareaPlaceholder}
        onChange={customOnChange}
        value={value}
      />
    </>
  );
};

export { FormTextarea };

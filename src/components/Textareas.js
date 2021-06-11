import React from "react";

import "../styles/Textareas.css";

const FormTextarea = ({
  onChange,
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
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export { FormTextarea };

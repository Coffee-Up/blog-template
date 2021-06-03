import React from "react";

import "../styles/Textareas.css";
import theme from "../theme.js";

const textareaFormStyles = {
  boxShadow: `${theme.boxShadows.formTextareas}`,
};

const FormTextarea = ({
  customOnChange,
  textareaName,
  textareaPlaceholder,
  value,
}) => {
  return (
    <>
      <textarea
        style={textareaFormStyles}
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

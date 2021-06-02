import React from "react";

import { FormInput } from ".";

const modelObject = {
  id: 0,
  firstname: "",
  title: "",
};

const FormComment = (props) => {
  const { handleInputChange, resetForm } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="fullName"
        label="Full Name"
        value="valeur de l'input"
        onChange={handleInputChange}
      />
      <button type="submit"></button>
    </form>
  );
};

export default FormComment;

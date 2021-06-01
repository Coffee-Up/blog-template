import React from "react";
import useForm from "./";

import { Input } from "./Input";

const modelObject = {
  id: 0,
  firstname: "",
  title: "",
};

export default function CommentForm() {
  const { values, setValues, handleInputChange, resetForm } =
    useForm(modelObject);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="fullName"
        label="Full Name"
        value={values.fullName}
        onChange={handleInputChange}
      />
      <button type="submit"></button>
    </form>
  );
}

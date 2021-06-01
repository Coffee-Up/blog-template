// This is a Hook component to handle changes in forms
import React, { useState } from "react";

export default function useForm(modelObject) {
  const [values, setValues] = useState(modelObject);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(modelObject);
  };

  return {
    values,
    setValues,
    handleInputChange,
    resetForm,
  };
}

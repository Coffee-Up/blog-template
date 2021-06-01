import React from "react";

export default function Input(props) {
  const { name, label, value, onChange, ...other } = props;

  return (
    <input
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
    />
  );
}

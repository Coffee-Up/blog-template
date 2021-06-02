import React, { useState } from "react";

export default function FormInput(props) {
  const [centerPlaceHolder, setCenterPlaceHolder] = useState(true);

  const handleChangeInput = (event) => {
    // Center the text in placeholder if empty. CSS can't directly deal with placeholders
    const isInputEmpty = !event.target.value;
    setCenterPlaceHolder(isInputEmpty);
  };

  return (
    <>
      <input
        className={centerPlaceHolder ? "g-center-text" : ""}
        placeholder="Add a title"
        onChange={((event) => handleChangeInput(event), props.onChange)}
      />
    </>
  );
}

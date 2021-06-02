// TO DO: change firstname to username & txt to postTextby username back & front
// TO DO: find a better way to update formData, I don't like the const updatedChange = {}
import React, { useState } from "react";

import {
  FormInput,
  FormTextarea,
  CommentModalSending,
  CommentModalSended,
} from "./";
import { SubmitButton } from "./Buttons";

const formDataEmpty = {
  articleId: null,
  firstname: "",
  title: "",
  text: "",
};
// TO DO: find a way to incoporate in formDataModel
const error = {
  text: undefined,
};

const FormComment = ({ postId }) => {
  const [isSending, setIsSending] = useState(false);
  const [postedSucceffuly, setPostedSucceffuly] = useState(undefined);
  const [formData, setFormData] = useState(formDataEmpty);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedValue = {};
    updatedValue[name] = value;

    setFormData({
      ...formData,
      ...updatedValue,
    });

    const isTextLong = name === "text" && formData.text.length > 20;

    isTextLong
      ? (error.text = undefined)
      : (error.text = "You have to write a little bit more ! ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    if (error.text !== undefined) return;

    formData.articleId = postId;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    await fetch(
      "https://ael-blog-backend.herokuapp.com/comment",
      requestOptions
    ).then((response) => response.json());

    const resetForm = formDataEmpty;

    await setFormData({
      ...formData,
      ...resetForm,
    });

    setIsSending(false);
    setPostedSucceffuly(true);
  };

  return (
    <>
      <CommentModalSending opened={isSending} />
      <CommentModalSended
        handleClose={() => setPostedSucceffuly(undefined)}
        opened={postedSucceffuly}
      />
      <form onSubmit={handleSubmit}>
        <FormInput
          inputPlaceholder="Add a Title"
          inputName="title"
          value={formData.title}
          customOnChange={handleChange}
        />
        <FormInput
          inputPlaceholder="Username"
          inputName="firstname"
          value={formData.firstname}
          customOnChange={handleChange}
        />
        <FormTextarea
          textareaName="text"
          textareaPlaceholder="Add your text"
          value={formData.text}
          customOnChange={handleChange}
        />
        <SubmitButton type="submit">Post It !</SubmitButton>
      </form>
    </>
  );
};

export default FormComment;

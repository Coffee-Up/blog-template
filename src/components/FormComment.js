// TO DO: change firstname to username & txt to postTextby username back & front
// TO DO: find a better way to update formData, I don't like the const updatedChange = {}
// Local storage set is here onl to retrieve a post if something goes wrong
import React, { useState, useEffect } from "react";

import "../styles/FormComment.css";

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
  // run Once after initial rendering
  useEffect(() => {
    //retrieve comment after fail, if exist
    if (localStorage.hasOwnProperty("formCommentData")) {
      const commentLocalStorage = JSON.parse(
        localStorage.getItem("formCommentData")
      );
      setFormData(commentLocalStorage);
    }
  }, []);

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

    localStorage.setItem("formCommentData", JSON.stringify(formData));

    const requestOptionsPostCreation = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    await fetch(
      "https://ael-blog-backend.herokuapp.com/comment",
      requestOptionsPostCreation
    ).then((response) => response.json());

    // WebHook Netlify (rebuild website)
    const requestOptionsWebHook = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    await fetch(
      "https://api.netlify.com/build_hooks/60b8ad87a18ed5f6c7d38360",
      requestOptionsWebHook
    ).then((response) => response.json());

    const resetForm = formDataEmpty;
    await setFormData({
      ...formData,
      ...resetForm,
    });

    setIsSending(false);
    setPostedSucceffuly(true);

    localStorage.removeItem("formCommentData");
  };

  return (
    <>
      <CommentModalSending opened={isSending} />
      <CommentModalSended
        handleClose={() => setPostedSucceffuly(undefined)}
        opened={postedSucceffuly}
      />
      <h4>Do you have something to say ?</h4>
      <p>Post without login in !</p>
      <form id="form-comment-root" onSubmit={handleSubmit}>
        <div>
          <FormInput
            inputPlaceholder="Title (Optional)"
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
        </div>
      </form>
    </>
  );
};

export default FormComment;

// TO DO: change firstname to username & txt to postTextby username back & front
// TO DO: find a better way to update formData, I don't like the const updatedChange = {}
// Local storage set is here onl to retrieve a post if something goes wrong
import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

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

const FormComment = ({ postId }) => {
  const [isSending, setIsSending] = useState(false);
  const [postedSucceffuly, setPostedSucceffuly] = useState(undefined);
  const [formData, updateFormData] = useState({
    articleId: null,
    firstname: "",
    title: "",
    text: "",
  });
  const [errorText, updateErrorText] = useState(undefined);
  // run Once after initial rendering
  useEffect(() => {
    //retrieve comment after fail, if exist
    if (localStorage.hasOwnProperty("formCommentData")) {
      const commentLocalStorage = JSON.parse(
        localStorage.getItem("formCommentData")
      );

      updateFormData(commentLocalStorage);
    }
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedValue = {};
    updatedValue[name] = value;

    updateFormData({
      ...formData,
      ...updatedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isTextLong = formData.text.length > 20;
    if (!isTextLong) {
      updateErrorText("You have to write a little bit more ! ");
      return;
    }

    setIsSending(true);

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
    );

    const resetForm = formDataEmpty;
    await updateFormData({
      ...formData,
      ...resetForm,
    });

    setIsSending(false);
    setPostedSucceffuly(true);

    localStorage.removeItem("formCommentData");
  };

  const handleBot = () => {
    // Hidden form is filled, it's a bot, GO HOME JERK !
    navigate("/");
  };

  return (
    <>
      <CommentModalSending opened={isSending} />
      <CommentModalSended
        handleClose={() => setPostedSucceffuly(undefined)}
        opened={postedSucceffuly}
      />
      <form id="form-comment-root" onSubmit={handleSubmit}>
        <h4>Have something to say ?</h4>
        <p>No log in needed, instant fun ! </p>
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
          {errorText && <p className="g-text-error">{errorText}</p>}
          <SubmitButton type="submit">Post It !</SubmitButton>
          {/*------------ BOT SPAM SIMPLE PROTECTION HIDDEN -----------*/}
          <label className="ohnohoney" for="name"></label>
          <input
            className="ohnohoney"
            autocomplete="off"
            type="text"
            id="name"
            name="name"
            placeholder="Your name here"
            onChange={() => handleBot()}
          />
          <label className="ohnohoney" for="email"></label>
          <input
            className="ohnohoney"
            autocomplete="off"
            type="email"
            id="email"
            name="email"
            placeholder="Your e-mail here"
            onChange={() => handleBot()}
          />
          {/*-----------------------*/}
        </div>
      </form>
    </>
  );
};

export default FormComment;

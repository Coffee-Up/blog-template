import React, { useState, useEffect } from "react";
import "../styles/PostComments.css";
import { navigate } from "gatsby";

import { IconLoader } from "../assets/icons";
import { FormComment } from ".";

const Comments = ({ comments, postId, pathname }) => {
  const [text, setTextComment] = useState("");
  const [firstname, setFirstname] = useState("");
  const [title, setTitle] = useState("");
  //Modal of post created
  const [showModalSended, setShowModalPosted] = useState(false);
  // Show comments list
  const [showComments, setShowComments] = useState(false);
  //Loader of post posting
  const [showLoader, setShowLoader] = useState(false);

  const postingComment = async (e) => {
    e.preventDefault();
    // comment empty = exit
    if (text === "") return;
    setShowLoader(true);
    const data = {
      articleId: postId,
      firstname,
      text,
      title,
    };

    // username and title is not required
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const commentValidated = await fetch(
      "https://ael-blog-backend.herokuapp.com/comment",
      requestOptions
    ).then((response) => response.json());

    // setCommentSendedData(res)
    setShowLoader(false);
    setShowModalPosted(true);
  };

  const handleInputChange = () => {
    console.log("input change");
  };

  useEffect(() => {});
  return (
    <div id="comments-container">
      <FormComment handleInputChange={handleInputChange()} />
      <div id="comments-container-title">
        <h3>Comments Section</h3>
      </div>
      <div>
        {comments.length > 0 && (
          <>
            <p>Comments already on this post !</p>
            <button onClick={() => setShowComments(!showComments)}>
              Show {comments.length} Comments
            </button>
          </>
        )}
        {showComments && (
          <ul id="comments-list-ul">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <h4>{comment.title}</h4>
                  <p id="comment-text-body">{comment.text}</p>
                  {comment.firstname !== "" && (
                    <p id="comment-author">{comment.firstname}</p>
                  )}
                  <p id="comment-created-at">
                    {comment.createdAt.split("").slice(0, 10)}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {showLoader && (
        <div id="modal-comment-container-sending">
          <IconLoader id="loader-icon" />
        </div>
      )}
      {showModalSended && (
        <>
          <div id="modal-comment-sended-bg"></div>
          <div id="modal-comment-sended-container">
            <p>
              You have sended your comment, it will be visible in few minutes.
              <br />
              Thank you !
            </p>
            <button
              onClick={() => (
                setShowModalPosted(false), navigate(pathname, { replace: true })
              )}
            >
              OK
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;

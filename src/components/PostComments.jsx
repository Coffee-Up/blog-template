import React, { useState, useEffect } from "react";
import "../styles/PostComments.css";

import { IconLoader } from "../assets/icons";

export default function PostComments({ comments, postId }) {
  const [text, setTextComment] = useState("");
  const [firstname, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [commentJustSended, setCommentJustSended] = useState(false);
  const [commentSendedData, setCommentSendedData] = useState(undefined);
  const [isTextBodyOk, setIsTextBodyOk] = useState(false);

  const [showComments, setShowComments] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  function postTextChecker(event) {
    console.log("oui");
    console.log(event.target.value);
  }

  async function handleAddComment() {
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
    setCommentJustSended(true);
    setCommentSendedData(data);
  }

  useEffect(() => {});
  return (
    <div id="comments-container">
      {showLoader && (
        <div id="modal-comment-container-sending">
          <IconLoader id="loader-icon" />
        </div>
      )}
      {commentJustSended && (
        <>
          <div id="modal-comment-sended-bg"></div>
          <div id="modal-comment-sended-container">
            <p>
              You have sended your comment, it will be visible in few minutes.
              <br />
              Thank you !
            </p>
            <button onClick={() => setCommentJustSended(false)}>OK</button>
          </div>
        </>
      )}
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
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div id="comment-form-container">
        <form>
          <p>
            Commenting on my website don't require to login. <br />
            Because I think it should be simple & quick. Just write your comment
            & send it, it will be available in few minutes later. I am planning
            to able the use of markdown syntax in the future.
          </p>
          <p>Add a comment</p>
          <div id="comment-form-inputs-container">
            <input
              placeholder="Add a title (optional)"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              id="comment-form-username"
              placeholder="Your Username (optional)"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <textarea
            id="comment-form-body-text"
            placeholder="Type your comment here (required)"
            onChange={(event) => (
              setTextComment(event.target.value), postTextChecker(event)
            )}
          />
          {isTextBodyOk && <p>C'mon, Write a little bit more</p>}
        </form>
        <button onClick={() => handleAddComment()}>Post</button>
      </div>
    </div>
  );
}

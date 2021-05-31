import React, { useState, useEffect } from "react";
import "../styles/PostComments.css";

import { IconLoader } from "../assets/icons";

export default function PostComments({ comments, postId }) {
  const [text, setTextComment] = useState("");
  const [firstname, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [commentJustSended, setCommentJustSended] = useState(false);
  const [commentSendedData, setCommentSendedData] = useState(undefined);

  const [showComments, setShowComments] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  async function handleAddComment() {
    setShowLoader(true);

    const data = {
      articleId: postId,
      firstname,
      text,
      title,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const commentValidated = await fetch(
      "https://ael-blog-backend.herokuapp.com/comment",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => setCommentSendedData(res));

    setShowLoader(false);
    setCommentJustSended(true);
    setCommentJustSended(data);
  }
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
      <div>
        <h3>Comments Section</h3>
      </div>
      <div>
        {comments.length > 0 && (
          <button onClick={() => setShowComments(!showComments)}>
            Show {comments.length} Comments
          </button>
        )}
        {showComments && (
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <h4>{comment.title}</h4>
                  <p id="comment-text">{comment.text}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div id="comment-form-container">
        <form>
          <p>Add a comment</p>
          <p>
            Commenting on my website don't ask to login. Because I think it
            should be simple & quick. Just write your comment & send it, it will
            be available in few minutes later. I am planning to able the use of
            markdown syntax in the future.
          </p>
          <div id="comment-form-inputs-container">
            <input
              placeholder="Add a title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              placeholder="Your Username"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <textarea
            id="comment-body-text"
            onChange={(event) => setTextComment(event.target.value)}
          />
        </form>
        <button onClick={() => handleAddComment()}>Add Comment</button>
      </div>
    </div>
  );
}

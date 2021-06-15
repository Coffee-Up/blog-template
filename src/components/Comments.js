import React, { useState } from "react";
import "../styles/Comments.css";

import { ActionButton, FormComment } from "./";

const Comments = ({ comments, postId }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div id="comments-container">
      {comments.length > 0 && (
        <>
          <p>Comments already on this post !</p>
          <ActionButton
            className={`button-action-toggled-${showComments}`}
            onClick={() => setShowComments(!showComments)}
          >
            Show {comments.length} Comments
          </ActionButton>
        </>
      )}
      {showComments && (
        <ul>
          {comments.map((comment) => {
            const { createdAt, firstname, text, id, title } = comment;

            return (
              <li key={id}>
                <h4>{title}</h4>
                <p id="comment-text-body">{text}</p>
                <p id="comment-author">{firstname}</p>
                <p id="comment-created-at">{createdAt}</p>
              </li>
            );
          })}
          {showComments && (
            <ActionButton
              className={`button-action-toggled-${showComments}`}
              onClick={() => setShowComments(!showComments)}
            >
              Hide Comments
            </ActionButton>
          )}
        </ul>
      )}
      <FormComment postId={postId} />
    </div>
  );
};

export default Comments;

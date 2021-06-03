import React, { useState, useEffect } from "react";

import "../styles/Comments.css";
import { ActionButton } from "./Buttons";

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {});
  return (
    <div id="comments-container">
      {comments.length > 0 && (
        <>
          <p>Comments already on this post !</p>
          <ActionButton
            classNameHerited={showComments && "button-action-toggled"}
            onClickHerited={() => setShowComments(!showComments)}
          >
            Show {comments.length} Comments
          </ActionButton>
        </>
      )}
      {showComments && (
        <ul>
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
          {showComments && (
            <ActionButton
              classNameHerited={showComments && "button-action-toggled"}
              onClickHerited={() => setShowComments(!showComments)}
            >
              Hide Comments
            </ActionButton>
          )}
        </ul>
      )}
    </div>
  );
};

export default Comments;

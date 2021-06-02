import React, { useState, useEffect } from "react";
import "../styles/PostComments.css";

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {});
  return (
    <div id="comments-container">
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
    </div>
  );
};

export default Comments;

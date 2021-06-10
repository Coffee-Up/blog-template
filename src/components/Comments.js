import React, { useState, useEffect } from "react";

import "../styles/Comments.css";

import { ActionButton } from "./Buttons";

import { simplifyDateObject } from "../utils/helpersDate";

const Comments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {});
  return (
    <div id="comments-container">
      {comments.length > 0 && (
        <>
          <p>Comments already on this post !</p>
          <ActionButton
            className={showComments && "button-action-toggled"}
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
            // Check if it works (no comment atm)
            const { month, day, year } = simplifyDateObject(createdAt);

            return (
              <li key={id}>
                <h4>{title}</h4>
                <p id="comment-text-body">{text}</p>
                {firstname !== "" && <p id="comment-author">{firstname}</p>}
                <p id="comment-created-at">
                  {month}
                  {day}
                  {year}
                </p>
              </li>
            );
          })}
          {showComments && (
            <ActionButton
              className={showComments && "button-action-toggled"}
              onClick={() => setShowComments(!showComments)}
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

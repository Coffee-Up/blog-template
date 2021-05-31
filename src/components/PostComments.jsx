import React, { useState, useEffect } from "react";
import "../styles/Comments.css";

export default function PostComments({ comments, postId }) {
  const [text, setTextComment] = useState("");
  const [articleId, setArticleId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");

  const [showComments, setShowComments] = useState(false);

  async function addComment() {
    const data = {
      articleId,
      firstname,
      lastname,
      text,
      title,
      contact,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const commentAdded = await fetch(
      "https://ael-blog-backend.herokuapp.com/comment",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => console.log(res));
  }

  useEffect(() => {
    setArticleId(postId);
  });
  return (
    <div id="comments-container">
      <h3>Comments Section</h3>
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
      <div id="comment-form-container">
        <form>
          <p>Add a comment</p>
          <p>
            Commenting on my website don't ask to login. Because I think it
            should be simple & quick. Just write your comment & send it, it will
            be available in few minutes later. I am planning to able the use of
            markdown syntax in the future.
          </p>
          <div>
            <input onChange={(event) => setTitle(event.target.value)} />
          </div>
          <div>
            <input onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div>
            <input onChange={(event) => setContact(event.target.value)} />
          </div>
          <div>
            <input onChange={(event) => setLastName(event.target.value)} />
          </div>
          <textarea onChange={(event) => setTextComment(event.target.value)} />
        </form>
        <button onClick={() => addComment()}>Add Comment</button>
      </div>
    </div>
  );
}

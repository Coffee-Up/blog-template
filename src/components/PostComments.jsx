import React, { useState, useEffect } from "react";

export default function PostComments({ comments, postId }) {
  const [text, setTextComment] = useState("empty");
  const [articleId, setArticleId] = useState("empty");
  const [firstname, setFirstName] = useState("empty");
  const [lastname, setLastName] = useState("empty");
  const [title, setTitle] = useState("empty");
  const [contact, setContact] = useState("empty");

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
    <>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <h2>{comment.title}</h2>
              <p>{comment.text}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <form>
          <p>Add a comment</p>
          <p>
            Commenting on my website don't ask to login. Because I think it
            should be simple & quick. Just write your comment & send it, it will
            be available in few minutes later. I am planning to able the use of
            markdown syntax in the future.
          </p>
          <input onChange={(event) => setTitle(event.target.value)} />
          <input onChange={(event) => setFirstName(event.target.value)} />
          <input onChange={(event) => setContact(event.target.value)} />
          <input onChange={(event) => setLastName(event.target.value)} />
          <textarea onChange={(event) => setTextComment(event.target.value)} />
        </form>
        <button onClick={() => addComment()}>Add Comment</button>
      </div>
    </>
  );
}

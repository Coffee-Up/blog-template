import React, { useState, useEffect } from "react";

export default function PostComments({ comments, postId }) {
  const [textComment, setTextComment] = useState("empty");
  const [articleId, setArticleId] = useState("empty");
  const [firstName, setFirstName] = useState("empty");
  const [lastName, setLastName] = useState("empty");
  const [title, setTitle] = useState("empty");
  const [contact, setContact] = useState("empty");

  async function addComment() {
    const data = {
      articleId,
      firstName,
      lastName,
      textComment,
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
    console.log(commentAdded);
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
          <textarea onChange={(event) => setTitle(event.target.value)} />
          <textarea onChange={(event) => setFirstName(event.target.value)} />
          <textarea onChange={(event) => setContact(event.target.value)} />
          <textarea onChange={(event) => setLastName(event.target.value)} />
          <textarea onChange={(event) => setTextComment(event.target.value)} />
        </form>
        <button onClick={() => addComment()}>Add Comment</button>
      </div>
    </>
  );
}

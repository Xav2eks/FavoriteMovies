import React, { use, useState } from "react";

function CreateInput(props) {
  const [titleInput, setTitleInput] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const [movie, setMovie] = useState({
    title: "",
    comment: "",
  });

  function handleTitleInput(event) {
    const titleValue = event.target.value;

    setTitleInput(titleValue);
  }

  function handleCommentInput(event) {
    const commentValue = event.target.value;

    setCommentInput(commentValue);
  }

  function handleAddMovie() {
    const movie = {
      title: titleInput,
      comment: commentInput,
    };

    props.onAdd(movie);
  }

  return (
    <div className="input-container">
      <div className="title-input-container">
        <p>Title:</p>
        <input
          placeholder="ADD A MOVIE"
          onChange={handleTitleInput}
          name="title"
          value={titleInput}
        />
      </div>
      <div className="comment-input-container">
        <p>Comment:</p>
        <textarea
          onChange={handleCommentInput}
          name="comment"
          value={commentInput}
        />
      </div>
      <div className="button-container">
        <button onClick={handleAddMovie}>ADD</button>
      </div>
    </div>
  );
}

export default CreateInput;

import React from "react";

function CreateInput() {
  return (
    <div className="input-container">
      <div className="title-input-container">
        <p>Title:</p>
        <input placeholder="ADD A MOVIE" />
      </div>
      <div className="comment-input-container">
        <p>Comment:</p>
        <textarea />
      </div>
    </div>
  );
}

export default CreateInput;

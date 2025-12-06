import React, { use, useState } from "react";

function CreateInput() {
  const [titleInput, setTitleInput] = useState("");

  function handleTitleInput(event) {
    const titleValue = event.target.value;

    setTitleInput(titleValue);

    console.log(titleValue);
  }

  return (
    <div className="input-container">
      <div className="title-input-container">
        <p>Title:</p>
        <input
          placeholder="ADD A MOVIE"
          onChange={handleTitleInput}
          value={titleInput}
        />
      </div>
      <div className="comment-input-container">
        <p>Comment:</p>
        <textarea />
      </div>
      <div className="button-container">
        <button>ADD</button>
      </div>
    </div>
  );
}

export default CreateInput;

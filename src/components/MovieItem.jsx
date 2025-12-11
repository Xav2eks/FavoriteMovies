import React, { use, useState } from "react";

function MovieItem(props) {

  function handleDelete () {
    props.onDelete(props.id)
  }

  return (
    <div className="movieItem">
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <p className="movieParagraph">{props.comment}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default MovieItem;

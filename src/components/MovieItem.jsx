import React, { use, useState } from "react";

function movieItem(props) {
  return (
    <div className="movieItem">
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <p>{props.comment}</p>
      <button>DELETE</button>
    </div>
  );
}

export default movieItem;

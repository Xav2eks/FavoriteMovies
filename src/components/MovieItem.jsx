import React, { use, useState } from "react";

function movieItem(props) {
  return (
    <div className="movieItem">
      <h2>{props.title}</h2>
      <p>{props.comment}</p>
    </div>
  );
}

export default movieItem;

import React, { useState } from "react";
import Header from "./components/Header";
import CreateInput from "./components/CreateInput";
import MovieItem from "./components/MovieItem";

function App() {
  const [movieArray, setMovieArray] = useState([]);

  function handleAdd(movie) {
    setMovieArray((prevValue) => {
      return [...prevValue, movie];
    });

    console.log(movieArray);
  }

  return (
    <div className="main-container">
      <Header />
      <CreateInput onAdd={handleAdd} />
      <div className="moviesListContainer">
        {movieArray.map((movie, index) => {
          return (
            <MovieItem
              key={index}
              title={movie.title}
              comment={movie.comment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

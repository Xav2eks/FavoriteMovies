import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateInput from "./components/CreateInput";
import MovieItem from "./components/MovieItem";

function App() {
  const [movieArray, setMovieArray] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieArray));
  }, [movieArray]);

  function handleAdd(movie) {
    setMovieArray((prevValue) => {
      return [...prevValue, movie];
    });

    console.log(movieArray);
  }

  function deleteMovie(id) {
    setMovieArray((prevValue) => {
      return prevValue.filter((movie, index) => {
        return index !== id;
      });
    });
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
              id={index}
              image={movie.image}
              title={movie.title}
              comment={movie.comment}
              onDelete={deleteMovie}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

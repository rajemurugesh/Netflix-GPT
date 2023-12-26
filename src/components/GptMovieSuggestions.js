import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { selectedMovie } from "../utils/gptSlice";

const GptMovieSuggestions = () => {
  const dispatch = useDispatch();

  const handleMovieClick = (movie) => {
    dispatch(selectedMovie(movie));
  }

  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  console.log(movieResult, movieNames);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName.id}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

import React from 'react'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
    const selectedMovie = useSelector()
  return (
    <div>MovieDetails</div>
  );
};

export default MovieDetails;
import React from "react";

const MovieDetails = ({movie}) => (
    <div className="MovieDetails">
      <h2>{movie.title}</h2>
      <p>Réalisateur : {movie.director}</p>
      <p>Genre : {movie.genre}</p>
      <p>Année : {movie.releaseYear}</p>
      <p>Note : {movie.rating}</p>
    </div>
  );
  
  export default MovieDetails;
  
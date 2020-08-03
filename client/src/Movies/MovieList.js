import React, {useEffect} from 'react';
import Movie from "./Movie";
import {Link} from "react-router-dom"

const MovieList = (props, clickHandler) => {

  

  

  
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}` }>
          <MovieDetails key={movie.id} movie={movie} onClick={clickHandler}  />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;

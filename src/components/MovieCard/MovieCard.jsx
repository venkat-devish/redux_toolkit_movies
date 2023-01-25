import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  const { Poster, Title, Year, imdbID } = data;

  return (
    <div className="card">
      <Link to={`/movie/${imdbID}`}>
        <div className="card__img">
          <img src={Poster} alt="Movie Poster" />
        </div>
        <div className="card__details">
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

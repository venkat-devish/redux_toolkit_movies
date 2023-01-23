import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ key, data }) => {
  console.log(data);
  const { Poster, Title, Year } = data;
  return (
    <div className="card">
      <div className="card__img">
        <img src={Poster} alt="Movie Poster" />
      </div>
      <div className="card__details">
        <h3>{Title}</h3>
        <p>{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

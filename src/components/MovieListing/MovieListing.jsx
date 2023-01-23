import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  console.log(allMovies);

  const renderedMovies =
    allMovies.Response === "True" ? (
      allMovies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{allMovies.error}</div>
    );

  return (
    <div className="movie__wrapper">
      <div className="movie__list">
        <h2>Movies</h2>
        <div className="movie__container">{renderedMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;

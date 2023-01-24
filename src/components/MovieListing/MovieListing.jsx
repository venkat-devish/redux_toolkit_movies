import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  isFetching,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const allMovies = useSelector(getAllMovies);
  const allShows = useSelector(getAllShows);

  const renderedMovies =
    allMovies.Response === "True" ? (
      allMovies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{allMovies.error}</div>
    );

  const renderedShows =
    allShows.Response === "True" ? (
      allShows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>{allShows.error}</div>
    );

  return (
    <div className="movie__wrapper">
      <div className="movie__list">
        <h2>Movies</h2>
        {!isFetching && <p>Loading...</p>}
        <div className="movie__container">{renderedMovies}</div>
      </div>
      <div className="show__list">
        <h2>Shows</h2>
        <div className="movie__container">{renderedShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;

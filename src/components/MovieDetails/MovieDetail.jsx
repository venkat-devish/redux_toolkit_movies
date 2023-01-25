import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncShowsOrMovies,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const movieData = useSelector(getSelectedMovieOrShow);

  console.log(movieData);

  useEffect(() => {
    dispatch(fetchAsyncShowsOrMovies(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className="movieDetail">
      <div className="movieDetail__container">
        <h1>{movieData.Title}</h1>
        <div className="movieDetail__props">
          <div className="movieDetail__prop">
            <p>IMDB Rating:</p>
            <p>{movieData.imdbRating}</p>
          </div>
          <div className="movieDetail__prop">
            <p>IMDB Votes:</p>
            <p>{movieData.imdbVotes}</p>
          </div>
          <div className="movieDetail__prop">
            <p>Runtime:</p>
            <p>{movieData.Runtime}</p>
          </div>
          <div className="movieDetail__prop">
            <p>Year:</p>
            <p>{movieData.Year}</p>
          </div>
        </div>
        <p className="movieDetail__plot">{movieData.Plot}</p>
        <div className="movieDetail__info">
          <div className="movieDetail__flex">
            <h2>Director</h2>
            <p>{movieData.Director}</p>
          </div>
          <div className="movieDetail__flex">
            <h2>Stars</h2>
            <p>{movieData.Actors}</p>
          </div>
          <div className="movieDetail__flex">
            <h2>Genres</h2>
            <p>{movieData.Genre}</p>
          </div>
          <div className="movieDetail__flex">
            <h2>Languages</h2>
            <p>{movieData.Language}</p>
          </div>
          <div className="movieDetail__flex">
            <h2>Awards</h2>
            <p>{movieData.Awards}</p>
          </div>
        </div>
      </div>
      <div className="movieDetail__image">
        <img src={movieData.Poster} alt="Movie Logo" />
      </div>
    </div>
  );
};

export default MovieDetail;

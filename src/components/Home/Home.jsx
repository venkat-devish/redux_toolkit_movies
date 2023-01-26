import React, { useEffect } from "react";
import "./Home.scss";
import { MovieListing } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  isFetching,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isFetching);
  const defaultMovie = "Sherlock";
  const defaultShow = "Sherlock";

  useEffect(() => {
    dispatch(fetchAsyncMovies(defaultMovie));
    dispatch(fetchAsyncShows(defaultShow));
  }, [dispatch]);

  return (
    <div>
      <div className="home__banner-img"></div>
      {isLoading === "true" ? <p>Loading...</p> : <MovieListing />}
    </div>
  );
};

export default Home;

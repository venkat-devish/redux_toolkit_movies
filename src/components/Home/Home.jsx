import React, { useEffect } from "react";
import "./Home.scss";
import { MovieListing } from "../../components";
import { fetchMovies } from "../../helpers";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovies().then((movies) => {
      dispatch(addMovies(movies));
    });
  }, [dispatch]);

  return (
    <div>
      <div className="home__banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

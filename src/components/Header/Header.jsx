import React, { useState } from "react";
import "./Header.scss";
import userLogo from "../../assets/user-logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (e) => setSearchTerm(e.target.value);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") return alert("Please enter a valid title!");

    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
    setSearchTerm("");
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">Toolkit Movies</div>
      </Link>
      <div>
        <div className="header__searchbar">
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Movies or Shows"
              onChange={searchTermHandler}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="header__user">
        <img src={userLogo} alt="User" />
      </div>
    </div>
  );
};

export default Header;

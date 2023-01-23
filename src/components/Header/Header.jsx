import React from "react";
import "./Header.scss";
import userLogo from "../../assets/user-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">Toolkit Movies</div>
      </Link>
      <div className="header__user">
        <img src={userLogo} alt="User" />
      </div>
    </div>
  );
};

export default Header;

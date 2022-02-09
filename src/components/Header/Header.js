import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../Images/header.png";
import { UserContext } from "./../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <div className="d-flex justify-content-center">
        <Link className="m-3 link" to="/">
          Home
        </Link>
        <Link className="m-3 link" to="/login">
          Login
        </Link>
        <Link className="m-3 link" to="/book/bedType">
          Book
        </Link>
        {loggedInUser.email && (
          <Link className="m-3 link" to="/profile">
            Profile
          </Link>
        )}
      </div>

      <div className="text-center mt-3 ">
        <h1 className="text"> Burj-Al-Arab </h1>
        <h4 className="text ">A global icon of arabian luxury</h4>
      </div>
    </div>
  );
};

export default Header;

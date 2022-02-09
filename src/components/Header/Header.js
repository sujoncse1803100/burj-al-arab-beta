import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../Images/header.png';

const Header = () => {
    return (
        <div
            style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }}
            className="header"
        >
            <div className="d-flex justify-content-center">
                <Link className="m-3 link" to="/home">Home</Link>
                <Link className="m-3 link" to="/login">Login</Link>
                <Link className="m-3 link" to="/book/bedType">Book</Link>
            </div>

            <div className="text-center mt-3 ">
                <h1 className="text"> Burj-Al-Arab </h1>
                <h4 className="text ">A global icon of arabian luxury</h4>
            </div>
        </div>
    );
};

export default Header;
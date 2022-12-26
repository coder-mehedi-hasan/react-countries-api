import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className="container">
                <div className="main">
                    <div className="logo">
                        <Link to="/">NAVBAR</Link>
                    </div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/"
                            className={({ isActive}) => {
                                return isActive ?"active":"";
                              }}>Home</NavLink></li>

                        <li><NavLink to="/about"
                        className={({ isActive}) => {
                            return isActive ?"active":"";
                          }}>About</NavLink></li>

                        <li><NavLink to="/countries"
                        className={({isActive}) => {
                            return isActive ?"active":"";
                          }}>All Countries</NavLink></li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
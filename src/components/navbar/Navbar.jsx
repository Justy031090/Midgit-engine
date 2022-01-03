import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">Midgit.</div>
                <Link to={'/'}>
                    <i className="fa fa-home"></i> Home
                </Link>
                <Link to={'/search'}>
                    <i className="fa fa-search"></i> Find Repos
                </Link>
                <Link to={'/watchlist'}>
                    <div className="link">
                        {' '}
                        <i className="fa fa-list"></i> Watchlist
                    </div>
                </Link>
                <Link to={'/login'}>
                    <div className="link">
                        {' '}
                        <i className="fa fa-sign-in"></i> Login
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Navbar;

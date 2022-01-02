import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to={'/'}>Home</Link>
                <Link to={'/search'}>Find Repos</Link>
                <Link to={'/login'}>
                    <div className="link">Login</div>
                </Link>
                <Link to={'/watchlist'}>
                    <div className="link">Watchlist</div>
                </Link>
            </div>
        </>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../context/AuthContext';
import Dash from '../dash/Dash';
function Navbar() {
    const { currentUser } = useAuth();
    return (
        <>
            <div className="navbar">
                <div className="logo">Midgit.</div>
                <Link to={'/'}>
                    <i className="fa fa-home"> </i> Home
                </Link>
                <Link to={'/search'}>
                    <i className="fa fa-search"> </i> Find Repos
                </Link>
                <Link to={'/watchlist'}>
                    <div className="link">
                        <i className="fa fa-list"> </i> Watchlist
                    </div>
                </Link>
                {currentUser ? (
                    <Dash></Dash>
                ) : (
                    <Link to={'/login'}>
                        <div className="link">
                            <i className="fa fa-sign-in"> </i> Sign In
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Navbar;

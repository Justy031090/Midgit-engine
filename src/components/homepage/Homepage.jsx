import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="break-container">
                <div className="homepage-break">
                    <span className="break-add">
                        Midgit, some advertising sentence
                        <i className="dot"> .</i>
                    </span>
                </div>
            </div>
            <div className="homepage-main">
                <Link to="/search">
                    <div className="homepage-link">
                        Start Now <br />
                        For Free
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;

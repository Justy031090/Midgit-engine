import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './dash.css';

function Dash() {
    const [err, setErr] = useState('');
    const { currentUser, logout } = useAuth();
    const user = currentUser.email.split('@').slice(0, 1);
    const handleLogOut = async () => {
        setErr('');
        try {
            await logout();
            window.location.pathname = '/';
        } catch {
            setErr('Please try again');
        }
    };
    return (
        <div className="logout-container">
            <div className="fa-icon" onClick={handleLogOut}>
                <i className="fa fa-sign-out"> </i>
            </div>
            <div className="logout">
                <h2 className="username">{user}</h2>
                {err && <h2>{err}</h2>}
            </div>
        </div>
    );
}

export default Dash;

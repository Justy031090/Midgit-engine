import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Dash() {
    const [err, setErr] = useState('');
    const { currentUser, logout } = useAuth();
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
        <div>
            <div>
                <strong>Email:</strong>
                {currentUser.email}
            </div>
            <div className="logout">
                {err && <h2>{err}</h2>}
                <i className="fa fa-sign-out"> </i>
                <button className="logout-btn" onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
        </div>
    );
}

export default Dash;

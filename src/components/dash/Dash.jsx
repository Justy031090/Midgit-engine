import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../../firebase';
import { GlobalContext } from '../context/GlobalState';
import { addDoc } from 'firebase/firestore';
import './dash.css';

function Dash() {
    const [err, setErr] = useState('');
    const { currentUser, logout } = useAuth();
    const user = currentUser.email.split('@').slice(0, 1);
    const uid = currentUser._delegate.uid;
    const { watchlist } = useContext(GlobalContext);
    const handleLogOut = async () => {
        setErr('');
        try {
            if (watchlist.length)
                await addDoc(db, {
                    id: uid,
                    watchlist,
                });
            await logout();
            window.localStorage.clear();
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

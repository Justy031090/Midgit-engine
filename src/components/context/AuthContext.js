import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthContext = React.createContext();
const googleProvider = new GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return auth.signOut();
    }
    function socialMediaAuth() {
        return auth.signInWithPopup(googleProvider);
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    const value = {
        currentUser,
        signup,
        login,
        logout,
        socialMediaAuth,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

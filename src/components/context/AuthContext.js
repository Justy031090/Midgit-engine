import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const AuthContext = React.createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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
    function googleAuth() {
        return auth.signInWithPopup(googleProvider);
    }
    function githubAuth() {
        return auth.signInWithPopup(githubProvider);
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
        googleAuth,
        githubAuth,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

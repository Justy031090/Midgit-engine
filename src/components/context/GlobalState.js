import { createContext, useEffect, useState } from 'react';
// import AppReducer from './AppReducer';
import { getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../context/AuthContext';

//initial state
// const initialState = [];

//create context
export const GlobalContext = createContext();

//provider
export const GlobalProvider = (props) => {
    const [fbWatchlist, setfbWatchlist] = useState([]);
    const { currentUser } = useAuth();
    useEffect(() => {
        const getList = async () => {
            if (currentUser)
                await getDocs(db).then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        const data = doc.data();
                        if (currentUser._delegate.uid === data.id) {
                            setfbWatchlist(data.watchlist);
                            localStorage.setItem(
                                'watchlist',
                                JSON.stringify(data.watchlist)
                            );
                        }
                    });
                });
        };
        getList();
    }, [currentUser]);
    //actions
    const addToWatchList = (repo) => {
        setfbWatchlist([repo, ...fbWatchlist]);
    };
    const removeFromWatchList = (watchItem) => {
        setfbWatchlist((list) => list.filter((i) => i !== watchItem));
    };
    return (
        <GlobalContext.Provider
            value={{
                watchlist: fbWatchlist,
                addToWatchList,
                removeFromWatchList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

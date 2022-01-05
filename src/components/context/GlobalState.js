import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
    myWatchlist: null,
};

const getData = async () => {
    await getDocs(db).then((snapshot) => {
        return snapshot.docs.map((doc) => {
            return doc.data().watchlist;
        });
    });
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    }, [state]);
    //actions
    const addToWatchList = (repo) => {
        dispatch({
            type: 'ADD_REPO_TO_WATCHLIST',
            payload: repo,
        });
    };
    const removeFromWatchList = (repo) => {
        dispatch({ type: 'REMOVE_REPO_FROM_WATCHLIST', payload: repo });
    };
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                addToWatchList,
                removeFromWatchList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

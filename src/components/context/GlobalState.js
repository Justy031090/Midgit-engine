import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state

const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist'))
        : [],
    watched: localStorage.getItem('watched')
        ? JSON.parse(localStorage.getItem('watched'))
        : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
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
                watched: state.watched,
                addToWatchList,
                removeFromWatchList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

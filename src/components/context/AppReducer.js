export default (state, action) => {
    switch (action.type) {
        case 'ADD_REPO_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };
        case 'REMOVE_REPO_FROM_WATCHLIST':
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (repo) => repo !== action.payload
                ),
            };
        default:
            return state;
    }
};

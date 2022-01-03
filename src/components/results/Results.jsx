import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

function Results({ repo }) {
    const { addToWatchList, watchlist } = useContext(GlobalContext);
    let storedRepo = watchlist.find((o) => o.id === repo.id);
    const repoDisabled = storedRepo ? true : false;
    return (
        <div className="result-card">
            <div className="image-container">
                <img
                    className="avatar-image"
                    src={repo.owner.avatar_url}
                    alt="Not Found"
                />
            </div>
            <div className="owner-container">
                <div className="owner-name">Owner: {repo.owner.login}</div>
                <div className="owner-type">Owner type: {repo.owner.type}</div>
                <div className="repo-description">
                    Description:
                    {repo.description.length > 90
                        ? repo.description.substring(0, 90) + '...'
                        : repo.description.substring(0, 90)}
                </div>
                <div className="repo-stars">
                    Stargazers {repo.stargazers_count}
                </div>
            </div>
            <div className="watchlist-add">
                <button
                    className="watchlist-btn"
                    disabled={repoDisabled}
                    onClick={() => addToWatchList(repo)}
                >
                    Add to Watchlist
                </button>
            </div>
            <div className="owner-github">
                <div className="owner-github">
                    <a href={repo.owner.url}>Watch in github </a>
                </div>
            </div>
        </div>
    );
}

export default Results;

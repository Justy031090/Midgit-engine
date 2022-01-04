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
                <div className="owner-type">
                    <strong>Ownership:</strong> {repo.owner.type}
                </div>
                <div className="owner-name">
                    <strong>User name:</strong> {repo.owner.login}
                </div>
                <div className="repo-description">
                    <strong> Description: </strong>
                    {repo.description
                        ? repo.description.substring(0, 90)
                        : repo.description}
                </div>
                <div className="repo-stars">
                    <strong>Stargazers: </strong> {repo.stargazers_count}
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

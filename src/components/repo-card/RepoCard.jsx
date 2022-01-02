import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function RepoCard({ repo, type }) {
    const { removeFromWatchList } = useContext(GlobalContext);
    return (
        <div className="repo-card-container">
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
                    Description: {repo.description}
                </div>
                <div className="repo-stars">
                    Stargazers {repo.stargazers_count}
                </div>
                <div className="watchlist-remove">
                    <button
                        className="watchlist-btn"
                        onClick={() => removeFromWatchList(repo)}
                    >
                        Remove from Watchlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RepoCard;

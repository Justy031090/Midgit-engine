import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function RepoCard({ repo, type }) {
    const { removeFromWatchList } = useContext(GlobalContext);
    return (
        <div className="repo-card">
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
                    <strong>Owner:</strong> {repo.owner.login}
                </div>
                <div className="repo-description">
                    <strong>Description: </strong>
                    {repo.description
                        ? repo.description.substring(0, 90)
                        : repo.description}
                </div>
                <div className="repo-stars">
                    <strong> Stargazers: </strong>
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="watchlist-remove">
                <button
                    className="watchlist-btn"
                    onClick={() => removeFromWatchList(repo)}
                >
                    Remove from Watchlist
                </button>
            </div>
            <div className="owners-github">
                <a href={repo.owner.url}>Watch in github</a>
            </div>
        </div>
    );
}

export default RepoCard;

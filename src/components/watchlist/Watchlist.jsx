import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import RepoCard from '../repo-card/RepoCard';
import { useAuth } from '../context/AuthContext';
import './watchlist.css';
// import { getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';

function Watchlist() {
    const { currentUser } = useAuth();
    const user = currentUser.email.split('@').slice(0, 1);
    const { watchlist } = useContext(GlobalContext);
    // const [myList, setMyList] = useState([]);

    return (
        <div className="watchlist-container">
            <h2>
                <strong>Hello:</strong> <i>{user}</i>
            </h2>

            {watchlist.length > 0 ? (
                watchlist.map((repo) => {
                    return (
                        <div key={repo.id} className="rendered-container">
                            <RepoCard repo={repo} type="watchlist" />
                        </div>
                    );
                })
            ) : (
                <h2>Add some of your favorite Repos !</h2>
            )}
        </div>
    );
}

export default Watchlist;

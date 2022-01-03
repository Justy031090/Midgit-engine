import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './search.css';
import Results from '../results/Results';
function Search() {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setErr('');
            try {
                const data = await axios.get(
                    `https://api.github.com/search/repositories?q=${term}&per_page=50`
                );
                setData(data.data.items);
                console.log(data);
            } catch (e) {
                setErr(e.message);
            }
            setIsLoading(false);
            setTerm('');
        };
        const timeOut = setTimeout(() => {
            if (term) {
                getData();
            }
        }, 500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [search, term]);
    const handleInput = (e) => {
        setTerm(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearch(term.toLowerCase());
        }
    };
    const renderItems = () => {
        return data.map((repo) => {
            return (
                <div key={repo.id} className="rendered-container">
                    <Results repo={repo} />
                </div>
            );
        });
    };
    return (
        <div className="search-container">
            <div className="hard-coded">
                <input
                    type="text"
                    onChange={(e) => handleInput(e)}
                    value={term}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <button
                    className="search-btn"
                    onClick={() => setSearch(term.toLowerCase())}
                >
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <div className="rendered">
                {data && <div>{renderItems()}</div>}
                {isLoading && <div className="loader">Loading...</div>}
                {err && <div>{err}</div>}
            </div>
        </div>
    );
}

export default Search;

import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import './search.css';
import Results from '../results/Results';
function Search() {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const observer = useRef();
    const lastRepo = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) {
                observer.current.disconnect();
            }
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) setPage((prev) => prev + 1);
            });
            if (node) observer.current.observe(node);
        },
        [isLoading]
    );

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setErr('');
            try {
                const fetchedData = await axios.get(
                    `https://api.github.com/search/repositories?q=${search}&page=${page}`
                );
                setData((prev) => [...prev, ...fetchedData.data.items]);
            } catch (e) {
                setErr(e.message);
            }
            setIsLoading(false);
            setTerm(''); // causing to Scrol-Rerendering not work if searched without submit
        };
        const timeOut = setTimeout(() => {
            if (search) {
                getData();
            }
        }, 500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [search, page]);

    const handleInput = (e) => {
        setTerm(e.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSearch(term.toLowerCase());
        }
    };
    const renderItems = () => {
        return data.map((repo, index) => {
            if (data.length === index + 1) {
                return (
                    <div
                        key={repo.id}
                        className="rendered-container"
                        ref={lastRepo}
                    >
                        <Results repo={repo} />
                    </div>
                );
            } else {
                return (
                    <div key={repo.id} className="rendered-container">
                        <Results repo={repo} />
                    </div>
                );
            }
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
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="rendered">
                {data && <div>{renderItems()}</div>}
                {isLoading && <div className="loader"></div>}
                {err && <div>{err}</div>}
            </div>
        </div>
    );
}

export default Search;

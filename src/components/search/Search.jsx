import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './search.css';
function Search() {
    const [term, setTerm] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(
                `https://api.github.com/search/repositories?q=${term}`
            );
            setData(data.data.items);
        };
        const timeOut = setTimeout(() => {
            if (term) {
                getData();
            }
        }, 500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [term]);
    const handleInput = (e) => {
        setTerm(e.target.value);
    };
    const renderItems = () => {
        console.log(data);
        return data.map((el) => {
            return (
                <div key={el.id} className="rendered-container">
                    <div className="image-container">
                        <img
                            className="avatar-image"
                            src={el.owner.avatar_url}
                            alt="Image Not Found"
                        />
                    </div>
                </div>
            );
        });
    };
    return (
        <>
            <input type="text" onChange={(e) => handleInput(e)} />
            <button className="search-btn" onClick={renderItems}>
                Search
            </button>
            <div>{data.length && renderItems()}</div>
        </>
    );
}

export default Search;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getResult } from '../../actions';

const Searchbar = () => {
    const [username, setUsername] = useState("")

    const dispatch = useDispatch();
    const search = searchTerm => dispatch(getResult(searchTerm));

    const handleSubmit = e => {
        e.preventDefault();
        search(username);
    }

    const updateInput = e => {
        const input = e.target.value
        setUsername(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="usernameTextForm">GitHub Username </label>
            <input type="text" id="usernameTextForm" onChange={updateInput} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Searchbar

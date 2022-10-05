import React, { useState } from 'react';

const Searchbar = () => {
    const [username, setUsername] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username);
    }

    const updateInput = e => {
        const input = e.target.value
        console.log(input);
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
import React from 'react'


function RepoDiv(props) {


    return(
        <div className='card d-flex flex-column'>
            <p>Repo name: {props.data.name}</p>
            <p>No. of forks: {props.data.forks_count}</p>
            <p>No. of open issues: {props.data.open_issues_count}</p>
            <p>No. of stargazers: {props.data.stargazers_count}</p>
        </div>
    )
}

export default RepoDiv

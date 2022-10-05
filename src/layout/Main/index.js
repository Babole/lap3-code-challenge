import { useSelector } from 'react-redux';

import { RepoDiv } from '../../components'
import './style.css'

function Main() {

    const result = useSelector(state => state.result);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)
    

    const renderRepos = () => {
        if(!result) {
            return <p>Search for a username using the searchbox above!</p>
        } else if (error) {
            return <p role='alert'>Oops there's been an error! {error}</p>
        } else if (loading) {
            return <p>Loading . . .</p>
        } else {
            // result.forEach(repoData => {
            //     return <RepoDiv data={repoData} />
            // });
            // return <RepoDiv />
            return result.map(repoData => 
                    <RepoDiv data={repoData}/>
                    // console.log(repo)
                )
        } 
    }
  
    return (
        <main>
            {error ? <p role='alert'>Oops there's been an error! {error}</p> : renderRepos()}
        </main>
        
    )
}

export default Main

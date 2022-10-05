import { useSelector } from 'react-redux';

import { RepoDiv } from '../../components'

function Main() {

    const result = useSelector(state => state.result);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)
    

    const renderRepos = () => {
        if(loading) {
            return <p>Loading . . .</p>
        } else {
            result.forEach(repoData => {
                return <RepoDiv data={repoData} />
            });
        } 
    }
  
    return (
        <>
            {!result ? <p>Search for a username using the searchbox above!</p> : 0}
            {error ? <p role='alert'>Oops there's been an error! {error}</p> : renderRepos()}
        </>
    )
}

export default Main

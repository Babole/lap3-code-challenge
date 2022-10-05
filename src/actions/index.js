import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = (result_array) => ({
    type: 'LOAD_RESULT',
    payload: result_array
});

export const getResult = searchUsername => {
    return async dispatch => {
        dispatch(loading(searchUsername));
        try {
            const repoData = await fetchRepoData(searchUsername);
            dispatch(loadResult(repoData))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchRepoData = async searchUsername => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchUsername}/repos`)
        return data;
    } catch (err) {
        // if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}

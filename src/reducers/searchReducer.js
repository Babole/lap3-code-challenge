const initState = {
    username: "",
    result: null,
    loading: false
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_RESULT':
            const result = [];
            for (let i = 0; i < action.payload.length; i++) {
                result.push({ name: action.payload[i].name, forks_count: action.payload[i].forks_count, open_issues_count: action.payload[i].open_issues_count, stargazers_count: action.payload[i].stargazers_count })
            }
            return { ...state, result, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    };
};

export default searchReducer;

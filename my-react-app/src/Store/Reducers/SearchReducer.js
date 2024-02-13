const initialState = {
    data: null,
    loading: false,
    error: null,
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_DATA_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_SEARCH_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_SEARCH_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default SearchReducer;

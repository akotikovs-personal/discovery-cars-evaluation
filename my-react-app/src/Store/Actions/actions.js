import { getQuerySearch, getQueryLocations } from '../../Utils/query'

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
        try {
            const data = await getQueryLocations();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch ({ message }) {
            dispatch({ type: 'FETCH_DATA_FAILURE', payload: message });
        }
    };
};

export const fetchSearchData = (id) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_SEARCH_DATA_REQUEST' });
        try {
            const data = await getQuerySearch(id);
            dispatch({ type: 'FETCH_SEARCH_DATA_SUCCESS', payload: data });
        } catch ({ message }) {
            dispatch({ type: 'FETCH_SEARCH_DATA_FAILURE', payload: message });
        }
    };
}

export const isOpenPopup = (isOpen) => {
    return (dispatch) => {
        dispatch({ type: 'OPEN_POPUP', isOpen: isOpen })
    }
}

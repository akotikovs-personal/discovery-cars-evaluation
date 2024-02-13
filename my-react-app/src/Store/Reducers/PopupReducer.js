const initialState = {
    isOpen: false
};

const PopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_POPUP':
            return { ...state, isOpen: action.isOpen };
        default:
            return state;
    };
};

export default PopupReducer;

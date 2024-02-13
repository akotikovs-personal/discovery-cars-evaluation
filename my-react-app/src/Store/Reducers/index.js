import { combineReducers } from 'redux';
import LocationsReducer from './LocationsReducer';
import SearchReducer from './SearchReducer';
import PopupReducer from './PopupReducer';

const rootReducer = combineReducers({
    LocationsReducer, // Add your reducer to the root reducer
    SearchReducer,
    PopupReducer
});

export default rootReducer;

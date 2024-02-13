import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Store/Actions/actions';

import '../Styles/Main.scss';

const InitialQueryComponent = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.LocationsReducer.error);
    const isOpen = useSelector(state => state.PopupReducer.isOpen);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if(error) {
        return (
            <div className='Network-Error'>
                Seems like there is an issue. Make sure that backend is running. Please read README, and run the Laravel application, to proceed...
            </div>
        )
    }

    if(isOpen) {
        return (
            <div className='OpenedPopup' />
        )
    }

    return null;
};

export default InitialQueryComponent;

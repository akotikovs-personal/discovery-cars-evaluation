import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData } from '../Store/Actions/actions';
import SearchCard from './SearchCard';

import '../Styles/Search.scss'

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [isLocation, setIsLocation] = useState(null);

    const dispatch = useDispatch();
    const data = useSelector(state => state.SearchReducer.data);
    const locations = useSelector(state => state.LocationsReducer.data);

    const getLocationId = () => {
        return locations.find((item) => item.country.toLowerCase() === query.toLowerCase())
    }

    const handleSearch = () => {
        try {
            if (getLocationId()) {
                const { id } = getLocationId();

                setIsLocation(true);
                dispatch(fetchSearchData(id));
            } else {
                setIsLocation(false)
            }

        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    return (
        <div className='Search'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Country"
                    value={ query } 
                    onChange={ handleChange }
                />
                <button
                    type="submit"
                    disabled={ query === '' }
                >Search</button>
            </form>
            { isLocation && data && (
                <div>
                    <h2>Search Results:</h2>
                    <ul className='Search-Container'>
                        { data.map((data, i) => (
                            <SearchCard key={i} details={ data } />
                        )) }
                    </ul>
                </div>
            )}
            { isLocation === false && (
                <div className='Search-NoResults'>
                    <h1>No cars available for the searched country</h1>
                </div>
            )}
        </div>
    );
};

export default SearchForm;

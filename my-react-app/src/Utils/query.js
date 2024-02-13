import axios from 'axios';

export const getQuerySearch = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/search?locationId=${id}`);

    return data;
}

export const getQueryLocations = async () => {
    const { data } = await axios.get('http://localhost:8000/api/locations');

    return data;
}

export const postQueryBookCar = async (formData) => {
    const { data } = await axios.post('http://localhost:8000/api/bookCar', formData)

    return data;
}
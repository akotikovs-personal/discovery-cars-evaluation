import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postQueryBookCar } from '../Utils/query';
import SuccessComponent from '../Components/SuccessComponent';
import { isOpenPopup } from '../Store/Actions/actions';

import '../Styles/Checkout.scss';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        offerUId: window.localStorage.getItem('offerUId'),
        confirmationNumber: null
      });

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.PopupReducer.isOpen);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await postQueryBookCar(formData);
          setFormData({
            ...formData,
            confirmationNumber: JSON.parse(response).confirmationNumber
          });
          dispatch(isOpenPopup(true));
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return (
      <>
        <form onSubmit={handleSubmit} className='Checkout-Form'>
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder='Firstname...'
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder='Lastname...'
            />
            <input
              type="hidden"
              id="offerUId"
              name="offerUId"
              value={ formData.offerUId }
            />
          </div>
          <button
            type="submit"
            disabled={ formData.firstname === '' || formData.lastname === '' }
          >
            Submit
          </button>
        </form>
        { isOpen && (<SuccessComponent
          confirmationNumber={ formData.confirmationNumber }
          firstname={ formData.firstname }
          lastname={ formData.lastname }
        />
        )}
      </>
      
    );

}

export default Checkout;
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchForm from '../Components/SearchComponent';

import '../Styles/ProductDetails.scss'

const ProductDetails = () => {
    const { id } = useParams();
    const { data } = useSelector(state => state.SearchReducer);

    const getSingleItem = () => {
        window.localStorage.setItem("offerUId", id)

        if(data && data.length) {
            return data.find((item) => item.offerUId === id);
        }

        return null;
    }

    if (!getSingleItem()) {
        return (
            <div className='ProductDetails-NoData'>
                <p>Sorry car isn't available anymore, please choose another car.</p>
                <Link to='/'>Homepage</Link>
                <SearchForm />
            </div>
        );
    }

    return (
        <div className='ProductDetails-Container'>
            <div className='ProductDetails-Image'>
                <img src={ getSingleItem().vehicle.imageLink } alt={ getSingleItem().vehicle.modelName } />
            </div>
            <div className='ProductDetails-Description'>
                <div className='ProductDetails-Vendor'>
                    <img src={ getSingleItem().vendor.imageLink } alt={ getSingleItem().vendor.name } />
                    <p>{ getSingleItem().vendor.name }</p>
                </div>
                <div className='ProductDetails-Price'>
                    { getSingleItem().price.amount } { getSingleItem().price.currency }
                </div>
                <div className='ProductDetails-ProceedCheckout'>
                <Link to="/checkout">Procceed to checkout</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
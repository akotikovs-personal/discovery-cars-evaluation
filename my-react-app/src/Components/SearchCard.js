import { Link } from 'react-router-dom';

import '../Styles/SearchCard.scss'

const SearchCard = ({ details: { price, vehicle, vendor, offerUId }}) => {
    if (!price || !vehicle || !vendor ) return null;

    const { amount, currency } = price;
    const { imageLink, modelName } = vehicle;
    const { imageLink: vendorImageLink, name } = vendor;

    const link = `/product/${offerUId}`;

    return(
        <div className="CardDetails-Container">
            <div className="CardDetails-Vendor">
                <img src={ vendorImageLink } alt={ name } />
                <span>{ name }</span>
            </div>
            <div className="CardDetails-Vehicle">
                <img className="CardDetails-Vehicle__image" src={ imageLink } alt={ modelName } />
                <p className="CardDetails-Vehicle__name">{ modelName }</p>
            </div>
            <div className="CardDetails-Price">
                <span>{amount}{currency}</span>
            </div>
            <div className='CardDetails-Book'>
                <Link to={ link }>{ modelName } - Details</Link>
            </div>
        </div>
    )
}

export default SearchCard;
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isOpenPopup } from '../Store/Actions/actions';

import "../Styles/Success.scss";

const SuccessComponent = ({ confirmationNumber, firstname, lastname }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(isOpenPopup(false));
    }

    return (
        <div className="Popup">
            <div className="Popup-Header">
                <span className="Popup-Success">Success</span>
                <span onClick={ onClick } className="Popup-Close">x</span>
            </div>
            <div className="Popup-Content">
                <div className="Popup-Customer">
                    Dear <b>{ firstname } { lastname }</b>,
                    <p>We would like to thank you for choosing our service</p>
                    <p>
                        <span>Your confirmation id is - <b>{ confirmationNumber }</b></span>
                    </p>
                    <p>Soon the customer service will reach you out, to gather more information</p>
                    <br/>
                    <p>Best regards,</p>
                    <p>DiscoveryCars Team</p>
                </div>
            </div>
            <div className="Popup-Footer">
                <Link to="/" onClick={ onClick } >Homepage</Link>
            </div>
        </div>
    );
}

export default SuccessComponent;
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-Logo">
                <Link to="/">
                    <img src="https://www.discovercars.com/assets/common/img/logos/discovercars.svg" alt="Best car hire prices from Discover Cars" />
                </Link>                
            </div>
            <div className="Header-Navigation">
                    <div className="Header-Currency">
                        <Link to="#">EUR</Link>
                    </div>
                    <div className="Header-Language">
                        <Link to="#">English</Link>
                    </div>
                    <div className="Header-Help">
                        <Link to="#">Help</Link>
                    </div>
                    <div className="Header-Manage">
                        <Link to="#">Manage Booking</Link>
                    </div>
                    <div className="Header-Login">
                        <Link to="#">Log in</Link>
                    </div>
                </div>
        </div>
    );
}

export default Header;
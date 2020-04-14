import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/sport-store">
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/sport-store/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/sport-store/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
export default Header;
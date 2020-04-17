import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg' //SVG syntax

import { auth } from '../../Firebase/Firebase'
const Header = ({ currentUser }) => {
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
                {currentUser ? (//user state ==! null
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                        <Link className='option' to='/sport-store/signin'>SIGN IN</Link>)}
            </div>
        </div>
    )
}
export default Header;
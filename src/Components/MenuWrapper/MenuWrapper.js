import React from 'react';
import './MenuWrapper.scss';

const MenuWrapper = () => {
    return (
        <div className='menu-wrapper'>
            <ul className='menu'>
                <li className='item'>1</li>
                <li className='item'>2</li>
                <li className='item'>3</li>
                <li className='item'>4</li>
                <li className='item'>5</li>
                <li className='item'>6</li>
            </ul>
            <button className="left-paddle paddle hidden">
                <i className="left"></i>
            </button>
            <button className="right-paddle paddle">
                <i className="right"></i>
            </button>
        </div>
    )
}
export default MenuWrapper;
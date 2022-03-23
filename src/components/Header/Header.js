import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <div className='nav-bar'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/description">Description</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
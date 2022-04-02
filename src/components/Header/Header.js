import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div className='nav-bar'>
                <img onClick={()=>navigate('/')} src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
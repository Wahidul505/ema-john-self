import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav>
            <div className='nav-bar'>
                <img onClick={() => navigate('/')} src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ?
                            <button onClick={handleSignOut} className='sign-out-btn'>Sign Out</button>
                            :
                            <Link to="/SignIn">Sign IN</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;
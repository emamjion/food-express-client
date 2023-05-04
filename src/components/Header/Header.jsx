import React, { useContext } from 'react';
import './Header.css';
import logo from './../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <nav className='navbar'>
            <div className='logo-side'>
                <img className='logo' src={logo} />
                <h2>FoodEx.</h2>
            </div>
            <ul className='ul-list'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </ul>
            <div className='profile'>
                {user && <span>{user.diplayName}</span>}
                <Link to="/login">
                    <button className='login-btn'>Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
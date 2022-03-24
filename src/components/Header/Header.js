import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div > 
            <img src={logo} alt="logo"/>
            </div>
            <div className="home">
            <a href="https://github.com/">Order</a>
            <a href="https://github.com/">Order Review</a>
            <a href="https://github.com/">Manage inventory</a>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../image/Logo1.png';
import favorite from '../../image/favorite_border.png';
import account from '../../image/account_circle.png';


const Header = () => (
    <header>
        <nav>
            <div className="menu-section">
                <div className="menu-icon">
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">New</a></li>
                </ul>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="icons">
                <img src={favorite} alt="Favorite icon" />
                <img src={account} alt="Account icon" />
            </div>
        </nav>
    </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <h1 className="logo">CO</h1>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            <Link className="option" to="/sign-in">
                SIGN-IN
            </Link>
        </div>
    </div>
);

export default Header;
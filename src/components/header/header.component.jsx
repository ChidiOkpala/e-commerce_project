import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
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
            {
                currentUser ? 
                (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN-OUT
                </div>
                )
                :
                (
                    <div>
                        <Link className="option" to='/sign-up'>
                            SIGN-UP
                        </Link>
                        <Link className="option" to="/sign-in">
                            SIGN-IN
                        </Link>
                    </div>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : (<CartDropdown/>)
        }
        
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);

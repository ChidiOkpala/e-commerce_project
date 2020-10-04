import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';

// import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, LogoHeader } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <LogoHeader>CO</LogoHeader>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN-OUT
                </OptionLink>
                )
                :
                (
                    <div>
                        <OptionLink to='/sign-up'>
                            SIGN-UP
                        </OptionLink>
                        <OptionLink to="/sign-in">
                            SIGN-IN
                        </OptionLink>
                    </div>
                )
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : (<CartDropdown/>)
        }
        
    </HeaderContainer>
);

const mapStateToProps =createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

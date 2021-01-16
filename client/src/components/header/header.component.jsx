import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const toggleSignInOut = currentUser ? (
    <OptionLink as="div" onClick={signOutStart}>
      SIGN OUT
    </OptionLink>
  ) : (
    <OptionLink to="/sign-in">SIGNIN</OptionLink>
  );

  const toggleCartDropDown = !hidden ? <CartDropDown /> : null;

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo-container" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {toggleSignInOut}
        <CartIcon />
      </OptionsContainer>
      {toggleCartDropDown}
    </HeaderContainer>
  );
};

// state is top-level root reducer
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

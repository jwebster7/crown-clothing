import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer
} from "./cart-icon.styles";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer as={ShoppingIcon} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

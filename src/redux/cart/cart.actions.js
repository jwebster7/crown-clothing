import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  const action = {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };

  return action;
};

export const addCartItem = (item) => {
  const action = {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
  };

  return action;
};

export const removeCartItem = (item) => {
  const action = {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
  };

  return action;
};

export const clearCartItem = (item) => {
  const action = {
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: item
  };

  return action;
};

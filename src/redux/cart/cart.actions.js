import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  const action = {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };

  return action;
};

export const addCartItem = (item) => {
  const action = {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item,
  };

  return action;
};

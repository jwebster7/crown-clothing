import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  const action = {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };

  return action;
};

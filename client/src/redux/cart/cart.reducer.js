import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from "./cart.utils";

// default initial state
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    case CartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;

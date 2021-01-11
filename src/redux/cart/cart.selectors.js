import { createSelector } from "reselect";

// selectors are a way to implement memoization and improves performance by reducing unnecessary re-renders

// input select - function that returns a slice of state
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
);

export const addItemToCart = (cartItems, item) => {
  const matchingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (matchingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

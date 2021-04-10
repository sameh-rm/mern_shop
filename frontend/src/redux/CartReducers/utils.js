export const addItemToCart = (cartItems = [], item) => {
  const existed = cartItems.find((x) => x.product === item.product);
  if (existed) {
    return cartItems.map((x) => (x.product === item.product ? item : x));
  } else {
    return [...cartItems, item];
  }
};

export const removeItemFromCart = (cartItems = [], item) => {
  return cartItems.filter((x) => x.product !== item.product);
};

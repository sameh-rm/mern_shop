import { cartActionTypes } from "./cartActionTypes";

export const addItemToCart = (product, qty) => ({
  type: cartActionTypes.CART_ADD_ITEM,
  payload: {
    product: product._id ? product._id : product.product,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty: qty,
  },
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.CART_REMOVE_ITEM,
  payload: item,
});

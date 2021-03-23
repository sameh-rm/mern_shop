import productActionTypes from "./productActionTypes";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case productActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case productActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

import axios from "axios";
import productActionTypes from "./productActionTypes";
// `/api/products/${match.params.id}`
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: productActionTypes.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: productActionTypes.PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getProductDetails = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${product_id}`);
    dispatch({
      type: productActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: productActionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

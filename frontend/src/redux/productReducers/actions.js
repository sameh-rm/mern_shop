import axios from "axios";
import productActionTypes from "./productActionTypes";
// `/api/products/${match.params.id}`
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    console.log(data);
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

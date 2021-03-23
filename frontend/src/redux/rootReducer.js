import { combineReducers } from "redux";
import { productListReducer } from "./productReducers/reducers";

const rootReducer = combineReducers({
  productList: productListReducer,
});

export default rootReducer;

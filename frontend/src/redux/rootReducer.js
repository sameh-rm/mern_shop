import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./CartReducers/reducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./productReducers/reducers";
import { userDetailsReducer, userReducer } from "./user/userReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);

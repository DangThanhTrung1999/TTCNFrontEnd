import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import {
  productSave,
  productList,
  productDetailsReducer,
  productDeleteReducer,
} from "./reducers/product.reducer";
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/user.reducer";
import { cartReducer } from "./reducers/cart.reducer";
import {
  orderListReducer,
  orderDeleteReducer,
  myOrderListReducer,
  orderDetailsReducer,
} from "./reducers/order.reducer";
const userInfo = Cookie.getJSON("user") || null;
const cartItems = Cookie.getJSON("cart") || [];

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const rootReducer = combineReducers({
  productSave,
  productList,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  useUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {
  productSave,
  productList,
  productDetailsReducer,
  productDeleteReducer,
} from "./reducers/product.reducer";
import { userSigninReducer } from "./reducers/user.reducer";
const rootReducer = combineReducers({
  productSave,
  productList,
  userSignin: userSigninReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

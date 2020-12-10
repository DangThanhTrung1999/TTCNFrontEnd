import * as productConstant from "../constants/product.constant";
import axios from "axios";

const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.PRODUCT_SAVE_REQUEST, payload: product });
    const { data } = await axios.post("/api/products", product);
    dispatch({ type: productConstant.PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_SAVE_FAIL,
      payload: error.message,
    });
  }
};
const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.PRODUCT_SAVE_REQUEST, payload: product });
    const { data } = axios.put("/api/products/" + product._id, product);
    dispatch({ type: productConstant.PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_SAVE_FAIL,
      payload: error.message,
    });
  }
};
const productList = (
  category = "",
  searchKeyword = "",
  sortOrder = ""
) => async (dispatch) => {
  try {
    dispatch({ type: productConstant.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/products?category=" +
        category +
        "&searchKeyword=" +
        searchKeyword +
        "&sortOrder=" +
        sortOrder
    );
    dispatch({ type: productConstant.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
export { createProduct, productList, updateProduct };

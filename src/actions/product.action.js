import * as productConstant from "../constants/product.constant";
import axios from "axios";

const createProduct = (product) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: productConstant.PRODUCT_SAVE_REQUEST, payload: product });
    const { data } = await axios.post("/api/products", product, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: productConstant.PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_SAVE_FAIL,
      payload: error.message,
    });
  }
};
const updateProduct = (product) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: productConstant.PRODUCT_SAVE_REQUEST, payload: product });
    const { data } = axios.put("/api/products/" + product._id, product, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: productConstant.PRODUCT_SAVE_SUCCESS, payload: data });

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

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: productConstant.PRODUCT_DETAILS_REQUEST,
      payload: productId,
    });
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({ type: productConstant.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({
      type: productConstant.PRODUCT_DELETE_REQUEST,
      payload: productId,
    });
    const { data } = await axios.delete("/api/products/" + productId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({
      type: productConstant.PRODUCT_DELETE_SUCCESS,
      payload: data,
      success: true,
    });
  } catch (error) {
    dispatch({
      type: productConstant.PRODUCT_DELETE_FAIL,
      payload: error.message,
    });
  }
};

const saveProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();
    dispatch({
      type: productConstant.PRODUCT_REVIEW_SAVE_REQUEST,
      payload: review,
    });
    const { data } = await axios.post(
      `/api/products/${productId}/reviews`,
      review,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: productConstant.PRODUCT_REVIEW_SAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // report error
    dispatch({
      type: productConstant.PRODUCT_REVIEW_SAVE_FAIL,
      payload: error.message,
    });
  }
};
export {
  createProduct,
  productList,
  updateProduct,
  detailsProduct,
  deleteProduct,
  saveProductReview,
};

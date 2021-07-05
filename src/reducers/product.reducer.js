import * as productConstant from "../constants/product.constant";

const productSave = (
  state = { product: {}, loading: false, success: "", error: null },
  action
) => {
  switch (action.type) {
    case productConstant.PRODUCT_SAVE_REQUEST:
      return { ...state, loading: true };
    case productConstant.PRODUCT_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };
    case productConstant.PRODUCT_SAVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const productList = (
  state = { products: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case productConstant.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case productConstant.PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case productConstant.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function productDetailsReducer(state = { product: { reviews: [] } }, action) {
  switch (action.type) {
    case productConstant.PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case productConstant.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case productConstant.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducer(state = { product: {} }, action) {
  switch (action.type) {
    case productConstant.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case productConstant.PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case productConstant.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productReviewSaveReducer(state = {}, action) {
  switch (action.type) {
    case productConstant.PRODUCT_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case productConstant.PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case productConstant.PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case productConstant.PRODUCT_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}
export {
  productSave,
  productList,
  productDeleteReducer,
  productDetailsReducer,
  productReviewSaveReducer
};

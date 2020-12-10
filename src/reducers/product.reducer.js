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

export { productSave, productList };

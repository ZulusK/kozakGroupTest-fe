import createReducer from "/services/helpers/createReducer";
import Types from "./types";

const initialState = {
  products: []
};

export default createReducer(initialState, {
  [Types.GET_PRODUCTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    products: payload.products.map(product => ({
      ...product,
      quantity: 0
    }))
  })
});

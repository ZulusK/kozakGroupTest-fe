import { createSelector } from "reselect";

const products = state => state.products;

export const productsList = createSelector(
  products,
  productsState => productsState.products
);

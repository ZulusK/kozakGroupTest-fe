import { getAllProducts as apiGetAllProducts } from "/services/api";
import Types from "./types";
import { actions as notificationsActions } from "/reducers/notifications";

export const getAllProducts = martId => dispatch => {
  dispatch(notificationsActions.requestStart());

  apiGetAllProducts(martId)
    .then(response => {
      dispatch({
        type: Types.GET_PRODUCTS_SUCCESS,
        payload: { products: response.data.docs }
      });
      dispatch(notificationsActions.requestSuccess());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};

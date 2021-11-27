import {
  DELETE_TO_CART,
  // START_POST_TO_CART,
  POST_TO_CART,
  MIN_QTY,
  PLUS_QTY,
} from "./constants";

export const postCart = (data) => {
  return (dispatch) => {
    // dispatch({
    //   type: START_POST_TO_CART,
    // });

    dispatch({
      type: POST_TO_CART,
      data,
    });
  };
};
export const deleteCart = (id) => {
  return (dispatch, getState) => {
    let data = getState().cart.data;

    // sortir data
    let sortirData = data.filter((items) => items.id !== id);

    // set data to loca storage
    localStorage.setItem("dataCart", JSON.stringify(sortirData));

    dispatch({
      type: DELETE_TO_CART,
      sortirData,
    });
  };
};

// add qty
export const addQty = (index) => {
  return (dispatch, getState) => {
    let data = getState().cart.data;

    data[index].jumlah =
      data[index].jumlah < data[index].stock
        ? data[index].jumlah + 1
        : data[index].jumlah + 0;

    // set data to loca storage
    localStorage.setItem("dataCart", JSON.stringify(data));

    dispatch({
      type: PLUS_QTY,
      data,
    });
  };
};
// min qty
export const minQty = (index, id) => {
  return (dispatch, getState) => {
    let data = getState().cart.data;

    if (data[index].jumlah <= 1) {
      dispatch(deleteCart(id));
    } else {
      data[index].jumlah = data[index].jumlah - 1;
      localStorage.setItem("dataCart", JSON.stringify(data));
      dispatch({
        type: MIN_QTY,
        data,
      });
    }
  };
};

import axios from "axios";
import { config } from "../../config";
import {
  DELETE_TO_CART,
  // START_POST_TO_CART,
  POST_TO_CART,
  MIN_QTY,
  PLUS_QTY,
  START_CHECKOUT_CART,
  SUCCESS_CHECKOUT_CART,
  ERROR_CHECKOUT_CART,
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
export const addQty = (index, id) => {
  return (dispatch, getState) => {
    let data = getState().cart.data;
    // get data product for get default price
    let dataProduct = getState().product.data;
    // sortir data prooduct by id product
    let dataProduyctById = dataProduct.find((item) => item.id === id);

    data[index].jumlah =
      data[index].jumlah < data[index].stock
        ? data[index].jumlah + 1
        : data[index].jumlah + 0;

    // harga dikali jumlah qty product
    data[index].price = data[index].jumlah * dataProduyctById.price;

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
    // get data product for get default price
    let dataProduct = getState().product.data;
    // sortir data prooduct by id product
    let dataProduyctById = dataProduct.find((item) => item.id === id);

    if (data[index].jumlah <= 1) {
      dispatch(deleteCart(id));
    } else {
      data[index].jumlah = data[index].jumlah - 1;
      localStorage.setItem("dataCart", JSON.stringify(data));

      // kurangi product berdasrkan data product yang dipilih by id
      data[index].price = data[index].price - dataProduyctById.price;

      dispatch({
        type: MIN_QTY,
        data,
      });
    }
  };
};

// checkout data cart
export const checkoutData = (data) => {
  return async (dispatch) => {
    dispatch({
      type: START_CHECKOUT_CART,
    });

    let dataSortir = data.data.map((items) => {
      return { productId: items.id, quantity: items.jumlah };
    });

    let sendData = {
      payload: dataSortir,
    };

    try {
      let { data } = await axios.post(
        `${config.api_host}transactions`,
        sendData,
        {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
          },
        }
      );
      dispatch({
        type: SUCCESS_CHECKOUT_CART,
        data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_CHECKOUT_CART,
        errors: error.response.data.msg,
      });
    }
  };
};

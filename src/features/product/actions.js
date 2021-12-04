import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  START_ONE_PRODUCT,
  ERROR_ONE_PRODUCT,
  SUCCESS_ONE_PRODUCT,
  START_DELETE_PRODUCT,
  ERROR_DELETE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
  START_POST_PRODUCT,
  ERROR_POST_PRODUCT,
  SUCCESS_POST_PRODUCT,
  START_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  SUCCESS_UPDATE_PRODUCT,
  SEARCH_BY_KEYWORD,
  SORTIR_BY_CATEGORY,
} from "./constants";
import axios from "axios";
import { config } from "../../config";

let token = JSON.parse(localStorage.getItem("token"));

export const fetchProduct = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_PRODUCT,
    });

    let keywordState = getState().product.keyword;
    let categoryState = getState().product.category;

    const params = {
      keyword: keywordState,
      category: categoryState,
      limit: 1000,
    };
    try {
      let { data } = await axios.get(`${config.api_host}products`, {
        params,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: SUCCESS_FETCHING_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_PRODUCT,
        payload: error,
      });
    }
  };
};

export const fetchProductOne = (id) => {
  return async (dispatch) => {
    dispatch({
      type: START_ONE_PRODUCT,
    });
    try {
      let { data } = await axios.get(`${config.api_host}products/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: SUCCESS_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ONE_PRODUCT,
        payload: error,
      });
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({
      type: START_DELETE_PRODUCT,
    });
    try {
      let { data } = await axios.delete(`${config.api_host}products/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: SUCCESS_DELETE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_DELETE_PRODUCT,
        payload: error,
      });
    }
  };
};

export const postProduct = (data) => {
  return async (dispatch) => {
    dispatch({
      type: START_POST_PRODUCT,
    });
    try {
      let { data } = await axios.post(`${config.api_host}products`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: SUCCESS_POST_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_POST_PRODUCT,
        payload: error,
      });
    }
  };
};

export const updateProduct = (id, form) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_UPDATE_PRODUCT,
    });

    let dataProductImage = getState().manage.imageChangeRes?.image?.src;

    let formNew = { ...form, cover: dataProductImage };

    try {
      let { data } = await axios.put(
        `${config.api_host}products/${id}`,
        formNew,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: SUCCESS_UPDATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_UPDATE_PRODUCT,
        payload: error,
      });
    }
  };
};

export const searchByKeyword = (keyword) => {
  return {
    type: SEARCH_BY_KEYWORD,
    keyword,
  };
};

export const sortirByCategory = (id) => {
  return {
    type: SORTIR_BY_CATEGORY,
    id,
  };
};

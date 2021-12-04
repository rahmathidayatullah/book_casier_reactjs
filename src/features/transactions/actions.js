import axios from "axios";
import { config } from "../../config";
import {
  ERROR_FETCHING_TRANSACTION,
  ERROR_ONE_TRANSACTION,
  START_FETCHING_TRANSACTION,
  START_ONE_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  SUCCESS_ONE_TRANSACTION,
  SEARCH_BY_KEYWORD,
} from "./constants";

let token = JSON.parse(localStorage.getItem("token"));

export const fetchTransaction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_TRANSACTION,
    });

    let keywordState = getState().transaction.keyword;

    const params = {
      keyword: keywordState,
    };

    try {
      let { data } = await axios.get(`${config.api_host}transactions`, {
        params,
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: SUCCESS_FETCHING_TRANSACTION,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_TRANSACTION,
      });
    }
  };
};

export const getOneTransaction = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_ONE_TRANSACTION,
    });

    try {
      let { data } = await axios.get(`${config.api_host}transactions/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      // console.log("data akan diolah", data);
      let sumPriceAll = data.data[0].detailTransaction
        .map((items) => {
          return items.priceProduct * items.quantity;
        })
        .reduce((a, b) => a + b, 0);

      dispatch({
        type: SUCCESS_ONE_TRANSACTION,
        payload: data,
        sumPriceAll,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ONE_TRANSACTION,
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

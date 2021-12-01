import axios from "axios";
import { config } from "../../config";
import {
  ERROR_FETCHING_TRANSACTION,
  ERROR_ONE_TRANSACTION,
  START_FETCHING_TRANSACTION,
  START_ONE_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  SUCCESS_ONE_TRANSACTION,
} from "./constants";

export const fetchTransaction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_TRANSACTION,
    });

    try {
      let { data } = await axios.get(`${config.api_host}transactions`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjoxLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM3ODU0ODU3fQ.VncotZISc7kfB18Rc5FV0EFS545Ha52fJKSfv-H9dmQ`,
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
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjoxLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM3ODU0ODU3fQ.VncotZISc7kfB18Rc5FV0EFS545Ha52fJKSfv-H9dmQ`,
        },
      });
      dispatch({
        type: SUCCESS_ONE_TRANSACTION,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ONE_TRANSACTION,
      });
    }
  };
};

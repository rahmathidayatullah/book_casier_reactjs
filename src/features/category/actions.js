import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
} from "./constants";
import axios from "axios";
import { config } from "../../config";
export const fetchCategory = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_CATEGORY,
    });
    try {
      let { data } = await axios.get(`${config.api_host}categories`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjoxLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM3ODU0ODU3fQ.VncotZISc7kfB18Rc5FV0EFS545Ha52fJKSfv-H9dmQ`,
        },
      });
      dispatch({
        type: SUCCESS_FETCHING_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_CATEGORY,
        payload: error,
      });
    }
  };
};

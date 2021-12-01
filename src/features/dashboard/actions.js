import axios from "axios";
import { config } from "../../config";
import {
  ERROR_FETCHING_DASHBOARD,
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
} from "./constants";

export const fetchDashboard = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_DASHBOARD,
    });
    try {
      let { data } = await axios.get(`${config.api_host}dashboards`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjoxLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM3ODU0ODU3fQ.VncotZISc7kfB18Rc5FV0EFS545Ha52fJKSfv-H9dmQ`,
        },
      });
      dispatch({
        type: SUCCESS_FETCHING_DASHBOARD,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_DASHBOARD,
      });
    }
  };
};

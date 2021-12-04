import axios from "axios";
import { config } from "../../config";
import {
  ERROR_FETCHING_DASHBOARD,
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
} from "./constants";

let token = JSON.parse(localStorage.getItem("token"));

export const fetchDashboard = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_FETCHING_DASHBOARD,
    });
    try {
      let { data } = await axios.get(`${config.api_host}dashboards`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log("data object", data);

      // new data sortir value highest first
      // let newData = data.data.bestProduct.sort((a, b) => {
      //   return a.total_quantity + b.total_quantity;
      // });

      // data.data.bestProduct = newData;

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

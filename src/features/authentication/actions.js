import axios from "axios";
import { config } from "../../config";
import {
  ERROR_POST_LOGIN,
  START_POST_LOGIN,
  SUCCESS_POST_LOGIN,
} from "./constants";

export const postLogin = (formData) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_POST_LOGIN,
    });

    // console.log("formData action", formData);
    try {
      let { data } = await axios.post(
        `${config.api_host}auth/signin`,
        formData
      );

      dispatch({
        type: SUCCESS_POST_LOGIN,
        payload: data,
      });

      // set data ke locastorage
      localStorage.setItem("token", JSON.stringify(data.data.token));
    } catch (error) {
      dispatch({
        type: ERROR_POST_LOGIN,
      });
    }
  };
};

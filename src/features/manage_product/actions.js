import axios from "axios";
import { config } from "../../config";
import {
  ERROR_CREATE_PRODUCT,
  ERROR_DELETE_PRODUCT,
  ERROR_GET_ONE_PRODUCT,
  ERROR_SEND_IMAGE_CHANGE,
  ERROR_UPDATE_PRODUCT,
  START_CREATE_PRODUCT,
  START_DELETE_PRODUCT,
  START_GET_ONE_PRODUCT,
  START_SEND_IMAGE_CHANGE,
  START_UPDATE_PRODUCT,
  SUCCESS_CREATE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
  SUCCESS_GET_ONE_PRODUCT,
  SUCCESS_SEND_IMAGE_CHANGE,
  SUCCESS_UPDATE_PRODUCT,
  CLEAR_STATE_AFTER_POST,
} from "./constants";

export const changeImageApi = (value) => {
  return async (dispatch) => {
    dispatch({
      type: START_SEND_IMAGE_CHANGE,
    });

    try {
      let formData = new FormData();
      formData.append("image", value);

      let { data } = await axios.post(`${config.api_host}uploads`, formData, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
        },
      });
      dispatch({
        type: SUCCESS_SEND_IMAGE_CHANGE,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_SEND_IMAGE_CHANGE,
        payload: error.response.data.msg,
      });
    }
  };
};
export const postProduct = (data) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_CREATE_PRODUCT,
    });

    // get data from func api changeImage
    let dataImageChange = getState().manage?.imageChangeRes?.image?.src;

    let sendData = { ...data, cover: dataImageChange };

    try {
      let { data } = await axios.post(`${config.api_host}products`, sendData, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
        },
      });
      dispatch({
        type: SUCCESS_CREATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_CREATE_PRODUCT,
        payload: error,
      });
    }
  };
};

export const clearStateAfterPost = () => {
  return {
    type: CLEAR_STATE_AFTER_POST,
  };
};

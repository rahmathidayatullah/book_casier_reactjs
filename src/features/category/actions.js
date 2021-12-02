import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  START_DELETE_CATEGORY,
  ERROR_DELETE_CATEGORY,
  SUCCESS_DELETE_CATEGORY,
  START_ONE_CATEGORY,
  ERROR_ONE_CATEGORY,
  SUCCESS_ONE_CATEGORY,
  START_UPDATE_CATEGORY,
  ERROR_UPDATE_CATEGORY,
  SUCCESS_UPDATE_CATEGORY,
  START_POST_CATEGORY,
  ERROR_POST_CATEGORY,
  SUCCESS_POST_CATEGORY,
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
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
        },
      });
      dispatch({
        type: SUCCESS_FETCHING_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_FETCHING_CATEGORY,
      });
    }
  };
};

export const deleteCategoryApi = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_DELETE_CATEGORY,
    });

    try {
      let { data } = await axios.delete(`${config.api_host}categories/${id}`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
        },
      });

      dispatch({
        type: SUCCESS_DELETE_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_DELETE_CATEGORY,
      });
    }
  };
};

export const getOneCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_ONE_CATEGORY,
    });
    try {
      let { data } = await axios.get(`${config.api_host}categories/${id}`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
        },
      });

      dispatch({
        type: SUCCESS_ONE_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ONE_CATEGORY,
      });
    }
  };
};

export const postCategory = (formData) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_POST_CATEGORY,
    });
    try {
      let { data } = await axios.post(
        `${config.api_host}categories/`,
        formData,
        {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
          },
        }
      );
      dispatch({
        type: SUCCESS_POST_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_POST_CATEGORY,
      });
    }
  };
};

export const postUpdateCategory = (id, formData) => {
  return async (dispatch, getState) => {
    dispatch({
      type: START_UPDATE_CATEGORY,
    });
    try {
      let { data } = await axios.put(
        `${config.api_host}categories/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhZG1pbiBjb2RlYXRob21lIiwidXNlcklkIjo2LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM4NDU5MjU3fQ.GGFFw2Zu3vpj-h6ozz8DYudtdS2c-OgI4tHTY9rTjdE`,
          },
        }
      );
      dispatch({
        type: SUCCESS_UPDATE_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_UPDATE_CATEGORY,
      });
    }
  };
};

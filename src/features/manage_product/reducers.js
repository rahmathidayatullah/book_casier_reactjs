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
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statuslist.idle,
  data: [],
  dataOne: [],
  imageChangeRes: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_CREATE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case SUCCESS_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case SUCCESS_GET_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case SUCCESS_SEND_IMAGE_CHANGE:
      return {
        ...state,
        status: statuslist.success,
        imageChangeRes: action.payload,
      };
    case SUCCESS_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case START_CREATE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case START_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case START_GET_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case START_SEND_IMAGE_CHANGE:
      return {
        ...state,
        status: statuslist.process,
      };
    case START_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case ERROR_CREATE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case ERROR_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case ERROR_GET_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case ERROR_SEND_IMAGE_CHANGE:
      return {
        ...state,
        status: statuslist.error,
      };
    case ERROR_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };

    default:
      return state;
  }
}

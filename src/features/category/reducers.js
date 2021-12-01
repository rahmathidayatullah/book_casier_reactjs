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

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
const initialState = {
  status: statuslist.idle,
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload.data,
      };
    case ERROR_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.error,
      };
    case START_DELETE_CATEGORY:
      return {
        ...state,
        loadingDelete: true,
      };
    case SUCCESS_DELETE_CATEGORY:
      return {
        ...state,
        loadingDelete: false,
        dataDelete: action.payload,
      };
    case ERROR_DELETE_CATEGORY:
      return {
        ...state,
        errorDelete: true,
      };
    case START_ONE_CATEGORY:
      return {
        ...state,
        loadingGetOne: true,
      };
    case SUCCESS_ONE_CATEGORY:
      return {
        ...state,
        loadingGetOne: false,
        dataGetOne: action.payload,
      };
    case ERROR_ONE_CATEGORY:
      return {
        ...state,
        errorGetOne: true,
      };
    case START_UPDATE_CATEGORY:
      return {
        ...state,
        loadingUpdate: true,
      };
    case SUCCESS_UPDATE_CATEGORY:
      return {
        ...state,
        loadingUpdate: false,
        dataUpdate: action.payload,
      };
    case ERROR_UPDATE_CATEGORY:
      return {
        ...state,
        errorUpdate: true,
      };
    case START_POST_CATEGORY:
      return {
        ...state,
        loadingPost: true,
      };
    case SUCCESS_POST_CATEGORY:
      return {
        ...state,
        loadingPost: false,
        dataPost: action.payload,
      };
    case ERROR_POST_CATEGORY:
      return {
        ...state,
        errorPost: true,
      };
    default:
      return state;
  }
}

import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  START_ONE_PRODUCT,
  ERROR_ONE_PRODUCT,
  SUCCESS_ONE_PRODUCT,
  START_DELETE_PRODUCT,
  ERROR_DELETE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
  START_POST_PRODUCT,
  ERROR_POST_PRODUCT,
  SUCCESS_POST_PRODUCT,
  START_UPDATE_PRODUCT,
  ERROR_UPDATE_PRODUCT,
  SUCCESS_UPDATE_PRODUCT,
  SEARCH_BY_KEYWORD,
  SORTIR_BY_CATEGORY,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
const initialState = {
  status: statuslist.idle,
  error: [],
  data: [],
  oneData: [],
  deleteData: [],
  postData: [],
  updateData: [],
  keyword: "",
  category: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload.data,
      };
    case ERROR_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
        error: action.payload.response.data.msg,
      };
    case START_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        oneData: action.payload,
      };
    case ERROR_ONE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case START_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        deleteData: action.payload,
      };
    case ERROR_DELETE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case START_POST_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_POST_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        postData: action.payload,
      };
    case ERROR_POST_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case START_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        updateData: action.payload,
      };
    case ERROR_UPDATE_PRODUCT:
      return {
        ...state,
        status: statuslist.error,
      };
    case SEARCH_BY_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
        category: "",
      };
    case SORTIR_BY_CATEGORY:
      return {
        ...state,
        category: action.id,
      };
    default:
      return state;
  }
}

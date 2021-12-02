import {
  ERROR_FETCHING_TRANSACTION,
  ERROR_ONE_TRANSACTION,
  START_FETCHING_TRANSACTION,
  START_ONE_TRANSACTION,
  SUCCESS_FETCHING_TRANSACTION,
  SUCCESS_ONE_TRANSACTION,
  SEARCH_BY_KEYWORD,
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
  keyword: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TRANSACTION:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_TRANSACTION:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case ERROR_FETCHING_TRANSACTION:
      return {
        ...state,
        status: statuslist.error,
      };
    case START_ONE_TRANSACTION:
      return {
        ...state,
        loadingGetOne: true,
      };
    case SUCCESS_ONE_TRANSACTION:
      return {
        ...state,
        loadingGetOne: false,
        dataGetOne: action.payload,
        totalSumPrice: action.sumPriceAll,
      };
    case ERROR_ONE_TRANSACTION:
      return {
        ...state,
        errorGetOne: true,
      };

    case SEARCH_BY_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    default:
      return state;
  }
}

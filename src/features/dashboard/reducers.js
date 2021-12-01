import {
  ERROR_FETCHING_DASHBOARD,
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
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
    case START_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case ERROR_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.error,
      };
    default:
      return state;
  }
}

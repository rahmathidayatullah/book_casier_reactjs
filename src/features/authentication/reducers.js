import {
  ERROR_POST_LOGIN,
  START_POST_LOGIN,
  SUCCESS_POST_LOGIN,
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
    case START_POST_LOGIN:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_POST_LOGIN:
      return {
        ...state,
        status: statuslist.success,
        data: action.payload,
      };
    case ERROR_POST_LOGIN:
      return {
        ...state,
        status: statuslist.error,
      };
    default:
      return state;
  }
}

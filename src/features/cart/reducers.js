import {
  DELETE_TO_CART,
  // START_POST_TO_CART,
  POST_TO_CART,
  UPDATE_TO_CART,
  MIN_QTY,
  PLUS_QTY,
  START_CHECKOUT_CART,
  SUCCESS_CHECKOUT_CART,
  ERROR_CHECKOUT_CART,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  status: statuslist.idle,
  data: !JSON.parse(localStorage.getItem("dataCart"))
    ? []
    : JSON.parse(localStorage.getItem("dataCart")),
  dataCheckout: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case START_POST_TO_CART:
    //   return { ...state, status: statuslist.process };

    case POST_TO_CART:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case DELETE_TO_CART:
      return {
        ...state,
        status: statuslist.success,
        data: action.sortirData,
      };
    case MIN_QTY:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case PLUS_QTY:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
      };
    case START_CHECKOUT_CART:
      return {
        ...state,
        status: statuslist.process,
      };
    case SUCCESS_CHECKOUT_CART:
      return {
        ...state,
        status: statuslist.success,
        dataCheckout: action.data,
      };
    case ERROR_CHECKOUT_CART:
      return {
        ...state,
        status: statuslist.success,
        dataCheckout: action.errors,
      };
    default:
      return state;
  }
}

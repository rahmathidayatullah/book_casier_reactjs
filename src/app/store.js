// (1) import module dari `redux`
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import productReducer from "../features/product/reducers";
import categoryReducer from "../features/category/reducers";
import cartReducer from "../features/cart/reducers";
import manageProductReducer from "../features/manage_product/reducers";
import transactionReducer from "../features/transactions/reducers";
import dashboardReducer from "../features/dashboard/reducers";
import authenticationReducer from "../features/authentication/reducers";

// (2) import redux-thunk middleware
import thunk from "redux-thunk";

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  manage: manageProductReducer,
  transaction: transactionReducer,
  dashboard: dashboardReducer,
  authentication: authenticationReducer,
});

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

// (6) export store
export default store;

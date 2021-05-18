import { createStore } from "redux";
import rootReducer from "./reducers";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = reduxDevTools
  ? createStore(rootReducer, reduxDevTools())
  : createStore(rootReducer);
export default store;

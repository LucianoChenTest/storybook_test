import { combineReducers } from "redux";

import test1 from "./test1";
import test2 from "./test2";
import test3 from "./test3";

const test = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  test1,
  test2,
});

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  test,
  test3,
});
export default rootReducer;

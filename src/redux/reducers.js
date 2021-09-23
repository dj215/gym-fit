import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./auth/reducer";

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    router: routerReducer,
    ...asyncReducers
  });

export default createReducer;
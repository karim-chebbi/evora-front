import { combineReducers } from "redux";
import CarReducer from "./CarReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({ CarReducer, AuthReducer });

export default rootReducer;

import { combineReducers } from "redux";
import authReducers from "./authReducers";
import profileReducers from "./profileReducers";

export default combineReducers({
    auth: authReducers,
    profile: profileReducers,
});

import { combineReducers } from "redux";
import authReducers from "./authReducers";
import profileReducers from "./profileReducers";
import courseReducers from "./courseReducers";

export default combineReducers({
    auth: authReducers,
    profile: profileReducers,
    course: courseReducers,
});

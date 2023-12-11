import { combineReducers } from "redux";
import authReducers from "./authReducers";
import profileReducers from "./profileReducers";
import categoryReducers from "./categoryReducers";

export default combineReducers({
    auth: authReducers,
    profile: profileReducers,
    category: categoryReducers,
});

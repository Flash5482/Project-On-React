import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    navbar: navbarReducer,
    usersPage:userReducer,
    auth:authReducer
});

let store = createStore(reducers);

window.store = store;
export default store;
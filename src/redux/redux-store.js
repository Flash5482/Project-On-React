import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import userReducer from "./userReducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    navbar: navbarReducer,
    usersPage:userReducer
});

let store = createStore(reducers);

export default store;
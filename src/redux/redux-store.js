import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
const {createStore} = require("redux");
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    navbar: navbarReducer,
    usersPage:userReducer,
    auth:authReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
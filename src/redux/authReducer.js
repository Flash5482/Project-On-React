import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_DATA_from_profile = "SET_USER_DATA_from_profile";

let initialState = {
    userDate: [],
    isFetching: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_USER_DATA_from_profile:
            return {
                ...state,
                userDate: action.profile
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
});
export const setUserDataFromProfile = (profile) => ({
    type: SET_USER_DATA_from_profile, profile
});


export const getAuthUserDataThunk = () => {
    return (dispatch) => {
        authAPI.getAuthAPI().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {

    authAPI.Login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunk());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    });
}
export const logOutThunk = () => (dispatch) => {
    authAPI.LogOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
}

export default authReducer;
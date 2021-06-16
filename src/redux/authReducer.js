const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_DATA_from_profile = "SET_USER_DATA_from_profile";

let initialState = {
    userDate:[],
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
                isAuth:true

            }
        case SET_USER_DATA_from_profile:
            return {
                ...state,
                userDate:action.profile
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA, data: {userId, email, login}
});
export const setUserDataFromProfile = (profile) => ({
    type: SET_USER_DATA_from_profile, profile
});

export default authReducer;
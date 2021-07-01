import {profileAPI} from "../api/api";

const addPost = 'ADD-POST'
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
    postData: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolores, eligendi est eveniet",
            likesCount: 15
        },
        {
            id: 2,
            message: "Spsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolores, eligendi est eveniet",
            likesCount: 20
        },
        {
            id: 3,
            message: "Spsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolores, eligendi est eveniet",
            likesCount: 20
        },
        {
            id: 4,
            message: "Spsum dolor sit amet, consectetur adipisicing elit. Alias asperiores dolores, eligendi est eveniet",
            likesCount: 20
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, {
                    id: 20,
                    message: action.text,
                    likesCount: 15
                }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default :
            return state;
    }


}
export const setStatus = (status) => ({type: SET_STATUS, status})

export const addPostActionCreator = (text) => ({type: addPost, text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getStatusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });

}
export const updateStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });

}

export const profileThunk = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        });

}

export default profileReducer;
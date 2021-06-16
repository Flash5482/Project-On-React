const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, {
                    id: 20,
                    message: state.newPostText,
                    likesCount: 15
                }]
            };
        }
        case updateNewPostText: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default :
            return state;
    }


}

export const addPostActionCreator = () => ({type: addPost})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostText,
        postText: text
    };
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;
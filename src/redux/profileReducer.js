const addPost = 'ADD-POST'
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':{
            let newPost = {
                id: 20,
                message: state.newPostText,
                likesCount: 15
            }
            let copyState = {...state};
            copyState.postData = [...state.postData];
            copyState.postData.push(newPost);
            copyState.newPostText = "";
            return copyState;
        }
        case 'UPDATE-NEW-POST-TEXT':{
            let copyState= {...state};
            copyState.newPostText = action.postText;
            return copyState;
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

export default profileReducer;
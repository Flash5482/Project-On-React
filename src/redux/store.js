
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
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
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Julia"},
                {id: 3, name: "Khristia"},
                {id: 4, name: "Oleg"}
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "hi"},
                {id: 3, message: "Good"},
                {id: 4, message: "Yo"}
            ],
            newMessage: ""
        },
        navbar: {
            friendsData: [
                {
                    id: 1,
                    name: "Reversed Flesh",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmf8aGq8vUOGvTltG1DjEYsXSVDRFizRITdfNfkT0lEuM6XMGzAdwDu-cNOy304pWXTYU&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Thor ",
                    img: "https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg"
                },
                {
                    id: 3,
                    name: "Superman",
                    img: "https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg"
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    subScribe(observer) {
        this.renderEntireTree = observer;
    },
    renderEntireTree() {
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this.renderEntireTree(this._state);
    }
}


export default store;


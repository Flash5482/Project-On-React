const addMessage = 'ADD-MESSAGE';
const updateNewMessage = 'CHANGE-NEW-MESSAGE';
let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  'ADD-MESSAGE':
            let newMessage = {
                id: 20,
                message: state.newMessage
            }
            state.messagesData.push(newMessage);
            state.newMessage = "";
            return state;
        case  'CHANGE-NEW-MESSAGE':
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: addMessage})
export const updateNewMessageActionCreator = (text) => {
    return {
        type: updateNewMessage,
        newMessage: text
    };
};
export default dialogsReducer;
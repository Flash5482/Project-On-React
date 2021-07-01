const addMessage = 'ADD-MESSAGE';
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

}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  addMessage:
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 20,
                    message: action.newMessageBody
                }],
            };
        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageBody) => ({type: addMessage, newMessageBody})

export default dialogsReducer;
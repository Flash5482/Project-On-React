import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPost/Post/Post";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Message/Message";

//// Information about Post
let postData = [
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
];
let newPostData =
    postData.map(item => {
        return (<Post post={item.message} countLike={item.likesCount}/>)
    });

/// Dialogs

let dialogsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Julia"},
    {id: 3, name: "Khristia"},
    {id: 4, name: "Oleg"}
];
let messegesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "hi"},
    {id: 3, message: "Good"},
    {id: 4, message: "Yo"}
];

let newDialogsData =
    dialogsData.map(item => {
        return (<Dialog name={item.name} id={item.id}/>);
    });

let newMessageData =
    messegesData.map(item => {
        return (<Message message={item.message} id={item.id}/>);
    });
//////////////////

ReactDOM.render(
    <React.StrictMode>
        <App arrayPostData={newPostData} arrayDialogsData={newDialogsData} arrayMessagesData={newMessageData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

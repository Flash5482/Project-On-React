import React from "react";
import Styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {MessageReduxForm} from "./AddMessageForm";

const Dialogs = (props) => {

    let newDialogsData =
        props.messagePage.dialogsData.map(item => {
            return (<Dialog name={item.name} id={item.id}/>);
        });
    let newMessageData =
        props.messagePage.messagesData.map(item => {
            return (<Message message={item.message} id={item.id}/>);
        });


    let newMessages = (values) => {
        let text = values.newMessageBody;
        props.addMessageActionCreator(text);

    }


    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogs__item}>
                {newDialogsData}
            </div>
            <div className={Styles.messeges}>
                {newMessageData}
                <MessageReduxForm onSubmit={newMessages}/>
            </div>

        </div>
    );
}
export default Dialogs;
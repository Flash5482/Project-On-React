import React from "react";
import Styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newDialogsData =
        props.state.dialogsData.map(item => {
            return (<Dialog name={item.name} id={item.id}/>);
        });
    let newMessageData =
        props.state.messagesData.map(item => {
            return (<Message message={item.message} id={item.id}/>);
        });
    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogs__item}>
                {newDialogsData}


            </div>
            <div className={Styles.messeges}>
                {newMessageData}
            </div>
        </div>
    );
}
export default Dialogs;
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
    let newMessage = React.createRef();
    let mes = ()=> {
        let message =  newMessage.current.value;
        alert(message);
    }
    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogs__item}>
                {newDialogsData}
            </div>
            <div className={Styles.messeges}>
                {newMessageData}
                <textarea ref={newMessage} className={Styles.input__text} name="" id="" cols="30" rows="2">
                </textarea>
                <button onClick={mes} className={Styles.button}>Send</button>
            </div>

        </div>
    );
}
export default Dialogs;
import React from "react";
import Styles from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={Styles.dialogs}>
            <div className={Styles.dialogs__item}>
                {props.arrayDialogsData}
            </div>
            <div className={Styles.messeges}>
                {props.arrayDMessagesData}
            </div>
        </div>
    );
}
export default Dialogs;
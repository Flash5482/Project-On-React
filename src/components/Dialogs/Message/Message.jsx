import React from "react";
import Styles from './Messege.module.css';
import {NavLink} from "react-router-dom";

const Message = (props)=>{
    return(
            <div className={Styles.message}>
                {props.message}
            </div>
    );
}
export default Message;
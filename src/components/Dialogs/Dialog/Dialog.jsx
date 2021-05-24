import React from "react";
import Styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/message/"+props.id
    return (
        <div className={Styles.dialog}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    );
}
export default Dialog;
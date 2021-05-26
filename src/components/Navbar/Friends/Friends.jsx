import React from "react";
import Styles from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={Styles.friend}>
            <div className={Styles.avatar}>
                <img
                    src={props.img}
                    alt=""/>
            </div>
            <p className={Styles.name}>{props.name}</p>
        </div>
    );
}
export default Friends;
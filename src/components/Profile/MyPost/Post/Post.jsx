import React from "react";
import Styles from "./Post.module.css";

const Post = (props) => {

    console.log(props.mess);
    return (
        <div className={Styles.post}>
            <div className={Styles.item}>
                <div className={Styles.avatar}></div>
                <p>
                   <div className={Styles.s}>{props.mess}</div>

                </p>
                <div className={Styles.like}>Like {props.countLike}</div>

            </div>
        </div>
    );
}

export default Post;
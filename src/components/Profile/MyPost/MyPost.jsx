import React from "react";
import Styles from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={Styles.main_input}>
            <h1>My post</h1>
            <div>
                <textarea className={Styles.input__text} name="" id="" cols="30" rows="2">
                </textarea>
                <button className={Styles.button}>Create</button>
            </div>
            {props.arrayPostData}
        </div>
    );
}
export default MyPost;
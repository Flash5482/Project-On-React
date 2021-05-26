import React from "react";
import Styles from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let newPostData =
        props.postData.map(item => {
            return (<Post post={item.message} countLike={item.likesCount}/>)
        });
    return (
        <div className={Styles.main_input}>
            <h1>My post</h1>
            <div>
                <textarea className={Styles.input__text} name="" id="" cols="30" rows="2">
                </textarea>
                <button className={Styles.button}>Create</button>
            </div>
            {newPostData}
        </div>
    );
}
export default MyPost;
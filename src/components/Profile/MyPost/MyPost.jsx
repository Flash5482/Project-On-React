import React from "react";
import Styles from './MyPost.module.css';
import Post from "./Post/Post";
import {MyPostFromRedux} from "./MyPostForm";


const MyPost = (props) => {

    let newPostData =
        props.profilePage.postData.map(item => {
            return (<Post post={item.message} countLike={item.likesCount}/>)
        });

    let addPosts = (values) => {
        let text = values.MyPostText;
        props.addPostActionCreator(text);
    }


    return (
        <div className={Styles.main_input}>
            <h1>My post</h1>
            <MyPostFromRedux onSubmit={addPosts}/>

            {newPostData}
        </div>
    );
}
export default MyPost;
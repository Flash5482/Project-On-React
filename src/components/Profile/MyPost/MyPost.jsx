import React from "react";
import Styles from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let newPostData =
        props.postData.map(item => {
            return (<Post post={item.message} countLike={item.likesCount}/>)
        });

    let newPostElement = React.createRef();
    let addPosts = ()=>{
        let text = newPostElement.current.value;
        props.event.addPost(text);
         newPostElement.current.value='';
    }
    return (
        <div className={Styles.main_input}>
            <h1>My post</h1>
            <div>
                <textarea ref={newPostElement} className={Styles.input__text} name="" id="" cols="30" rows="2">
                </textarea>
                <button onClick={addPosts} className={Styles.button}>Create post</button>
            </div>
            {newPostData}
        </div>
    );
}
export default MyPost;
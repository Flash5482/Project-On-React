import React from "react";
import Styles from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = ()=>{

    return(
        <div className={Styles.main_input}>
            <h1>My post</h1>
            <div >
                <textarea  className={Styles.input__text} name="" id="" cols="30" rows="2">

                </textarea>
                <button className={Styles.button}>Create</button>
            </div>

            <Post  countLike = "15"/>
            <Post mess = "BBBBB"countLike = "20" />
        </div>
    );
}
export default MyPost;
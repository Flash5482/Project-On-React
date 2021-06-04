import React from "react";
import Styles from './profile.module.css'
import Avatar from '../../img/avatar.png';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = () => {
    return (
        <div className={Styles.content}>
            <ProfileInfo/>
            <MyPostContainer/>

        </div>
    );
}

export default Profile;

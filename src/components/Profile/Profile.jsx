import React from "react";
import Styles from './profile.module.css'
import ProfileInfo from "./ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={Styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;

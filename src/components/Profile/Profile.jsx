import React from "react";
import Styles from './profile.module.css'
import Avatar from '../../img/avatar.png';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div className={Styles.content}>
            <ProfileInfo/>
            <MyPost postData={props.state.postData} event={props.event}/>

        </div>
    );
}

export default Profile;

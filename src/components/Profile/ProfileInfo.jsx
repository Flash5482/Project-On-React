import React from "react";
import Styles from './profile.module.css';
import Avatar from "../../img/avatar.png";
import Spinner from '../../img/Spinner-1s-200px.svg'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div className={Styles.spinner}> <img src={Spinner}/></div>
    }
    return (
        <div>
            <div className={Styles.main__image}>
                <img className={Styles.image}
                     src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                     alt=""/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div className={Styles.information}>
                <div className={Styles.avatar}>
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : Avatar} alt=""/>
                </div>
                <div className={Styles.description}>
                    <ul className={Styles.list}>
                        <li>{props.profile.fullName != null ? props.profile.fullName : "Rick Mortino"}</li>
                        <li className={Styles.item__bar}>
                            <div className={Styles.point}></div>
                        </li>
                        <li>Date of bithday: 20.20.1990</li>
                        <li>City: Los Angeles</li>
                        <li>Education: University Gas and Oil</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;
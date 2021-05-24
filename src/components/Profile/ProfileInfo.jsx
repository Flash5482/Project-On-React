import React from "react";
import Styles from './profile.module.css';
import Avatar from "../../img/avatar.png";

const ProfileInfo = () => {
    return (
        <div>
            <div className={Styles.main__image}>
                <img className={Styles.image}
                     src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                     alt=""/>
            </div>

            <div className={Styles.information}>
                <div className={Styles.avatar}>
                    <img src={Avatar} alt=""/>
                </div>
                <div className={Styles.description}>
                    <ul className={Styles.list}>
                        <li>Ricki Nortino</li>
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
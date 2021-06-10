import React from "react";
import Styles from './nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let newFriendsData =
        props.friendsData.map(item =>{
            return ( <Friends name={item.name}  img={item.img}/>);
    });
    return (
        <nav className={Styles.nav}>
            <div className={Styles.main__menu}>
                <NavLink className={Styles.link} to="/profile" activeClassName={Styles.active}>
                    <div className={Styles.item}> Profile</div>
                </NavLink>
                <NavLink className={Styles.link} to="/message" activeClassName={Styles.active}>
                    <div className={Styles.item}>Messages</div>
                </NavLink>
                <NavLink className={Styles.link} to="/news" activeClassName={Styles.active}>
                    <div className={Styles.item}>News</div>
                </NavLink>
                <NavLink className={Styles.link} to="/music" activeClassName={Styles.active}>
                    <div className={Styles.item}>Music</div>
                </NavLink>
                <NavLink className={Styles.link} to="/users" activeClassName={Styles.active}>
                    <div className={Styles.item}>Find people</div>
                </NavLink>
                <NavLink className={Styles.link} to="/settings" activeClassName={Styles.active}>
                    <div className={Styles.item}>Settings</div>
                </NavLink>
            </div>

            <div className={Styles.friends}>
                <h1 className={Styles.title}>Friends</h1>
                {newFriendsData}
            </div>

        </nav>
    );
}
export default Navbar;
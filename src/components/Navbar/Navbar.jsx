import React from "react";
import style from './nav.module.css';
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.main__menu}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </div>

        </nav>
    );
}
export default Navbar;
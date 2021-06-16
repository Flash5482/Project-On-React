import React from "react";
import Logo from "../../img/logo.png";
import Styles from './header.module.css';
import {NavLink} from "react-router-dom";
import HeaderPhoto from '../../img/avatar.png'

const Header = (props) => {
debugger
    return (
        <header className={Styles.header}/*"header"*/>
            <div className={Styles.logo}>
                <img src={Logo} alt=""/>
            </div>
            <div className={Styles.loginBlock}>
                {props.isAuth ? <p className={Styles.loginName}>
                        <NavLink to={'/profile/' + props.id} className={Styles.text}>{props.login}</NavLink>
                    </p> :
                    <NavLink className={Styles.text} to={'/login'}>Login</NavLink>
                }{/*props.profile.photos.small != null ? props.profile.photos.small :*/}

                <div className={Styles.headerPhoto}>
                    <img src={HeaderPhoto} alt=""/>

                </div>
            </div>
        </header>
    );
}
export default Header;
import React from "react";
import Logo from "../../img/logo.png";
import classes from './header.module.css';

const Header = ()=>{
    return(
        <header className={classes.header}/*"header"*/>
            <div className={classes.logo}>
                <img src={Logo} alt=""/>
            </div>
        </header>
    );
}
export default Header;
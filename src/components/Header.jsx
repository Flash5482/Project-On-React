import React from "react";
import Logo from "../img/logo.png";


const Header = ()=>{
    return(
        <header className="header">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>

        </header>
    );
}
export default Header;
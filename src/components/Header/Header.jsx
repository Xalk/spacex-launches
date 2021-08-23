import React from 'react';
import s from "./Header.module.css"
import logo from "../../assets/images/spacex.svg"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerBody}>
                <img className={s.logo} src={logo} alt=""/>
            </div>
        </div>
    );
}

export default Header;
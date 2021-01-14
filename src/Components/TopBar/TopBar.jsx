import React from "react";
import style from "./TopBar.module.css";
import {NavLink} from "react-router-dom";

const TopBar = () => {
    return (
        <div className={style.topbar}>
            <div className={style.tel}>
                +375 00 000-00-00
            </div>
            <NavLink to="/">
                Главная
            </NavLink>

        </div>
    )
}

export default TopBar;
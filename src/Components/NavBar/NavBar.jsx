import React from "react";
import style from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.name}>
                <h3>Каталог</h3>
            </div>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink exact to="/trotuarnai-plitka" activeClassName={style.active}>Тротуарная плитка</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink exact to="/vodostoki-gelob" activeClassName={style.active}>Водостоки, Желоб для отвода воды</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink exact to="/krishki" activeClassName={style.active}>Крышки на забор, на столбы</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink exact to="/bordurnii-kamen" activeClassName={style.active}>Бордюрный камень</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink exact to="/zabor" activeClassName={style.active}>Забор декоративный</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
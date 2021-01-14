import React from "react";
import style from "./TopBar.module.css";
import {NavLink} from "react-router-dom";

const TopBar = () => {
    return (
        <nav className={style.topbar}>
            <div className={`${style.item} ${style.tel}`}>
                <a href="tel:+375 00 000-00-00">+375 00 000-00-00</a>
            </div>
            <div className={style.item}>
                <NavLink exact to="/" activeClassName={style.active}>Главная</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/o-nas" activeClassName={style.active}>О нас</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/poleznai-information" activeClassName={style.active}>Полезная информация</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/stoimost" activeClassName={style.active}>Стоимость</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/uslugi" activeClassName={style.active}>Услуги</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/obratnai-svaiz" activeClassName={style.active}>Обратная связь</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/kontakt" activeClassName={style.active}>Контакты</NavLink>
            </div>
        </nav>
    )
}

export default TopBar;
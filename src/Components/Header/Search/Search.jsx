import React from "react";
import style from './Search.module.css';
//import icon from './../../../img/search.jpg'


const Search = () => {
    return (
        <div className={style.search}>
            <div className={style.catalog}>
                Весь каталог
            </div>
            <textarea className={style.text}></textarea>
            <button className={style.button}>{/*<img className={style.icon} src={icon} />*/}</button>

        </div>
    )
}
export default Search;
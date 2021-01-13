import React from "react";
import style from './Search.module.css';

const Search = () => {
    return (
        <div className={style.search}>
            <div className={style.catalog}>
                Весь каталог
            </div>
            <textarea></textarea>
            <img className={style.icon} />


        </div>
    )
}
export default Search;
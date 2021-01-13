import React from 'react';
import logo from './../../img/logo192.png';
import style from './Header.module.css';
import Search from './Search/Search'

const Header = () => {
    return (
      <div className={style.header}>
          <img className={style.logo} src={logo}/>
          <Search />

      </div>
    );
}




export default Header;
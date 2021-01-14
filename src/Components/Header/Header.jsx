import React from 'react';
import style from './Header.module.css';
import Search from './Search/Search'
import logo from './../../img/logo192.png';

const Header = () => {
    return (
      <div className={style.header}>
          <img className={style.logo} src={logo} />
          <Search />

      </div>
    );
}




export default Header;
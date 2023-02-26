import React, {useState, useContext} from 'react';
import {LangContext} from './LangProvider';
import style from './CSS/Footer.module.css';
import {no, en } from "../../node_modules/flag-icons/css/flag-icons.min.css";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

 const LangButton = () =>  {
    //const lang = LangContext.useLang;
    //const setLang =(nyLang) => {LangContext.useLang = nyLang; console.log()};

    const {lang, setLanguage, erNorsk} = useContext(LangContext);
    const handleClick = () => {
        setLanguage();
    }
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (

        <button className={style.atag}
          onClick={handleClick}>
            {erNorsk ? <span>{getUnicodeFlagIcon('NO')}</span> : <span>{getUnicodeFlagIcon('GB')}</span>}
          
        </button>
      )}

export default LangButton;
import React from 'react';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src='https://cdn.steemitimages.com/DQmNe7Jjj8i4U2yXLbf1J7utTRCCZduX6XgoDP8jX6P7rVN/2d0ccc6e871dd20fc8c2fa8b3064b560.png' alt='logo'></img>
            <label className={classes.inputText}> Choose country
                <input className={classes.input} type='search'></input>
            </label>
            <label className={classes.inputText}> Choose language
                <input className={classes.input} type='search'></input>
            </label>
        </header>
    )
}
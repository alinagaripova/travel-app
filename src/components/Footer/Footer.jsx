import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div>
                <p>Created by</p>
                <ul>
                    <li className={classes.developer}><a href='https://github.com/alinagaripova'>Alina Garipova</a></li>
                    <li className={classes.developer}><a href='https://github.com/masolemia'>Maria Soldatenko</a></li>
                    <li className={classes.developer}><a href='https://github.com/vepsar'>Vasiliy Zhuk</a></li>
                    <li className={classes.developer}><a href='https://github.com/maksim-nemtsev'>Maksim Nemtsev</a></li>
                </ul>
            </div>
            <div>2021</div>
            <div>
                <a href='https://rs.school/js/'><img src='././images/rs_school_js.svg' alt='RS School logo'></img></a>
            </div>
        </footer>
    )
}
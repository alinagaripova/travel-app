import React from "react";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
      <footer className={`${classes.footer} mt-4`}>
        <div>
          <a href='https://rs.school/js/' className={classes.rslogo}><img src='https://rs.school/images/rs_school_js.svg' alt='RS School logo'></img></a>
        </div>
        <div>
          <p className={classes.created}>Created by <span>(2021)</span></p>
          <ul className={classes.developersList}>
            <li className={classes.developer}><a href='https://github.com/alinagaripova'>Alina Gainanova</a></li>
            <li className={classes.developer}><a href='https://github.com/vepsar'>Vasiliy Zhuk</a></li>
            <li className={classes.developer}><a href='https://github.com/maksim-nemtsev'>Maksim Nemtsev</a></li>
          </ul>
        </div>
        {/*<div className={classes.year}>2021</div>*/}
      </footer>
  );
}

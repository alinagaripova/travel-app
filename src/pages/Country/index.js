import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import CountryMap from '../../components/CountryMap';

import './Country.scss';
import classes from "../../components/Header/Header.module.css";
import logo from "../Main/logo.png";

function Country({ countries }) {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const index = countries && countries.findIndex((item) => item.id == id);
    setData(countries[index]);
  }, [countries]);

  return (
      <>
          <header className={` ${classes.header} d-flex justify-content-around mb-5 py-3`}>
              <div>
                  <Link to={"/"}>
                      <img className={classes.logo} src={logo} alt={"logo"}/>
                  </Link>
              </div>
          </header>
          <div className={'container country-data'}>
              <h1 className={'country-data__header'}>
                  {data?.country} ({data?.capital})
              </h1>
              <div className={'country-data__body d-flex justify-content-around'}>
                  <div>
                      <img src={data?.main_image} alt="" />
                  </div>
                  <div className={'country-data__body_text px-3'}>{data?.description}</div>
              </div>
              <div className={'country-map__header'}>
                  <h2 className={'country-map__title'}>Карта страны</h2>
                  <CountryMap />
              </div>
          </div>
      </>
  );
}

export default Country;

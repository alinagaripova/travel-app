import LocalTime from "../../components/LocalTime/localTime";
import Exchange from "../../components/Exchange-rates/exch-rates";
import React, { useState, useEffect } from "react";

import "./Country.scss";
import Gallery from "../../components/Gallery/gallery";
import { Link, useParams } from "react-router-dom";
import CountryMap from "../../components/CountryMap";

import "./Country.scss";
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
      <div
        className="bg-cont"
        style={{
          backgroundImage: `url('${data?.main_image}')`,
        }}
      >
        <header className={` ${classes.header} d-flex justify-content-around mb-5 py-3`}>
          <div>
            <Link className="h-cont" to={"/"}>
              <img className={classes.logo} src={logo} alt={"logo"} style={{ width: 100, height: 80 }} />
              <div className="header-title">
                Travel App
                <p>Travel wherever you can</p>
              </div>
            </Link>
          </div>
        </header>

        <div className={"container country-data"}>
          <div className="country-data__h">
            <div className="country-data__head">
              <img src={data?.flag} alt="" />
              <h1 className={"country-data__header"}>
                {data?.country}
                <h4>Столица: {data?.capital}</h4>
              </h1>
            </div>
            <LocalTime country={data} />
          </div>

          <div className={"country-data__body d-flex justify-content-around"}>
            <div className={"country-data__body_text px-3"}>{data?.description}</div>
          </div>

          <div className="gallery-container">
            <h2>Галерея достопримечательностей</h2>
            <Gallery />
          </div>

          <div>
            <h2>Видеообзор</h2>
            <iframe
              width="750"
              height="415"
              src={`${data?.video}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className={"country-map__header"}>
            <h2 className={"country-map__title"}>Карта страны</h2>
            <CountryMap />
          </div>

          <h2>Дополнительная информация</h2>
          <Exchange country={data} />
          <br />
        </div>
      </div>
    </>
  );
}

export default Country;

import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/search";
import { useSearchContext } from "../../components/Search/searchContext";

import "./Main.scss";
import classes from "../../components/Header/Header.module.css";
import logo from "./logo.png";

export default function Main({ countries }) {
  const searchCntx = useSearchContext();
  return (
    <>
      <header className={` ${classes.header} d-flex justify-content-around mb-5 py-3`}>
        <div>
          <Link className="h-cont" to={"/"}>
            <img className={classes.logo} src={logo} alt={"logo"} />
            <div className="header-title">
              Travel App
              <p>Travel wherever you can</p>
            </div>
          </Link>
        </div>
        <Search />
      </header>
      <div className="container cards-container">
        <div className="row justify-content-between flex-wrap">
          {searchCntx.countries.filter(
            ({ country, capital }) =>
              country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
              capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
          ).length === 0
            ? searchCntx.countries.map((item, i) => {
                return (
                  <div className={"col-12 col-md-4 mb-4"} key={i}>
                    <Link to={`/country/${item.id}`}>
                      <div className="card">
                        <div className="card__image">
                          <img src={item.main_image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">{item.country}</h4>
                          <p className="card-text">{item.capital}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            : searchCntx.countries
                .filter(
                  ({ country, capital }) =>
                    country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
                    capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
                )
                .map((item, i) => {
                  return (
                    <div className={"col-12 col-md-4 mb-4"} key={i}>
                      <Link to={`/country/${item.id}`}>
                        <div className="card">
                          <div className="card__image">
                            <img src={item.main_image} className="card-img-top" alt="..." />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">{item.country}</h4>
                            <p className="card-text">{item.capital}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search/search";
import SearchProvider, { useSearchContext } from "../../components/Search/searchContext";

import "./Main.scss";

export default function Main({ countries }) {
  const searchCntx = useSearchContext();
  return (
    <div className="container cards-container">
      {/* <SearchProvider> */}
      <Search />
      <div className="row justify-content-between flex-wrap">
        {searchCntx.countries
          .filter(
            ({ country, capital }) =>
              country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
              capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
          )
          .map((item) => {
            return (
              <div className={"col-12 col-md-4 mb-4"}>
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
      {/* </SearchProvider> */}
    </div>
  );
}

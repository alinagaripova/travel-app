import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { useSearchContext } from "./searchContext";
// import "./search.css";
// import Searchresult from "./searchresult";

export default function Search() {
  const searchCntx = useSearchContext();
  const wrapperRef = useRef(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div style={{ width: 500 }} className="search-field">
      <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <input
          style={{ width: 500 }}
          id="auto"
          onClick={() => setDisplay(!display)}
          placeholder="Введите название страны или столицы"
          value={searchCntx.searchValue}
          onChange={(event) => searchCntx.setSearchValue(event.target.value)}
        />
        {display && (
          <div className="autoContainer">
            {searchCntx.countries
              .filter(
                ({ country, capital }) =>
                  country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
                  capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
              )
              .map((value, i) => {
                return (
                  <div className="option" style={{ width: 500 }} key={i} tabIndex="0">
                    <div>{value.country}</div>
                    <div>{`Столица ${value.capital}`}</div>
                    <img src={value.main_image} style={{ width: 150, height: 100 }} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "./searchContext";
import "./search.scss";
import { Form } from "react-bootstrap";
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

  const handleChange = (event) => {
    searchCntx.setSearchValue(event.target.value);
    setDisplay(true);
  };

  const handlePress = (event) => {
    if (
      event.key === "Enter" &&
      searchCntx.countries.filter(
        ({ country, capital }) =>
          country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
          capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
      ).length !== 0
    ) {
      window.location.href = `/country/${
        searchCntx.countries.filter(
          ({ country, capital }) =>
            country.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1 ||
            capital.toLowerCase().indexOf(searchCntx.searchValue.toLowerCase()) > -1
        )[0].id
      }`;
    }
  };

  return (
    <div className="search-field">
      <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <Form.Control
          id="search-input"
          autoComplete="off"
          size="lg"
          placeholder="Введите название страны или столицы"
          value={searchCntx.searchValue}
          onChange={handleChange}
          onKeyPress={handlePress}
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
                  <Link to={`/country/${value.id}`}>
                    <div className="option" key={i} tabIndex="0">
                      <div id="search-text">
                        <div>{value.country}</div>
                        <p>{`Столица: город ${value.capital}`}</p>
                      </div>
                      <img id={"search-flag"} src={value.flag} alt="flag.svg" />
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

const searchState = {
  countries: [],
  capitals: [],
  isLoaded: false,
  searchValue: "",
  countryId: 1,
};

const SearchContext = React.createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(searchState.searchValue);
  const [countries, setCountry] = useState(searchState.countries);
  const [isLoaded, setLoaded] = useState(searchState.isLoaded);
  const [countryId, setCountryId] = useState(searchState.countryId);

  useEffect(() => {
    fetch(`https://alinagaripova.github.io/json-api/countries.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setCountry(result);
          setLoaded(true);
        },
        (error) => {
          console.log("error");
          setLoaded(true);
        }
      );
  }, []);

  return (
    <SearchContext.Provider
      value={{
        countries,
        setCountry,
        isLoaded,
        setLoaded,
        searchValue,
        setSearchValue,
        countryId,
        setCountryId,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

import React, { useContext, useEffect, useState } from "react";

const searchState = {
  countries: [],
  capitals: [],
  isLoaded: false,
  searchValue: "",
};

const SearchContext = React.createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(searchState.searchValue);
  const [countries, setCountry] = useState(searchState.countries);
  const [isLoaded, setLoaded] = useState(searchState.isLoaded);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

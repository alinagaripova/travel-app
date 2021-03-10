import React, { useContext, useState } from "react";

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
  const [capitals, setCapitals] = useState(searchState.capitals);
  const [isLoaded, setLoaded] = useState(searchState.isLoaded);

  function apiHandler() {
    fetch(`https://restcountries.eu/rest/v2/name/${searchValue}?fields=name;capital`, {
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
    fetch(`https://restcountries.eu/rest/v2/capital/${searchValue}?fields=name;capital;flag;nativeName`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setCapitals(result);
          setLoaded(true);
        },
        (error) => {
          console.log("error");
          setLoaded(true);
        }
      );
  }

  return (
    <SearchContext.Provider
      value={{
        countries,
        setCountry,
        capitals,
        setCapitals,
        isLoaded,
        setLoaded,
        searchValue,
        setSearchValue,
        apiHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

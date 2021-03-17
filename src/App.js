import React, { useEffect, useState } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Country from "./pages/Country";

import "./App.css";
import SearchProvider from "./components/Search/searchContext";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://alinagaripova.github.io/json-api/countries.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        data && setCountries(data);
      })
      .catch((error) => console.error("country countries loader", error));
  }, []);

  return (
    <div className="App">
      <HashRouter basename="/">
        <Layout>
          <SearchProvider>
            <Switch>
              <Route path="/country/:id">
                <Country countries={countries} />
              </Route>
              <Route path="/">
                <Main countries={countries} />
              </Route>
            </Switch>
          </SearchProvider>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;

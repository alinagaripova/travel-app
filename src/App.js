import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Country from "./pages/Country";

import './App.css';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://alinagaripova.github.io/json-api/countries.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                data && setCountries(data);
            })
            .catch(error => console.error("country countries loader", error));
    }, [])

    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path='/country/:id'>
                        <Country countries={countries}/>
                    </Route>
                    <Route path='/'>
                        <Main countries={countries}/>
                    </Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from "./components/Layout";
import Main from "./pages/Main";

import './App.css';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route exact path='/' component={Main}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;

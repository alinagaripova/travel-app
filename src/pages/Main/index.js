import React, { useState, useEffect } from 'react';

export default function Main() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://alinagaripova.github.io/json-api/countries.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                data && setCards(data);
            })
            .catch(error => console.error("country cards loader", error));
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-between flex-wrap">
                {cards.map(item => {
                    return (
                        <div className={"col-12 col-md-4 mb-3"}>
                            <div className="card " >
                                <img src={item.main_image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.country}</h5>
                                    <p className="card-text">{item.capital}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
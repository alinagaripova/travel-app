import React from "react";
import { Link } from "react-router-dom";

import "./Main.scss";

export default function Main({ countries }) {
    return (
        <div className="container cards-container">
            <div className="row justify-content-between flex-wrap">
                {countries.map(item => {
                    return (
                        <div className={"col-12 col-md-4 mb-4"}>
                            <Link to={`/country/${item.id}`}>
                                <div className="card" >
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
                    )
                })}
            </div>
        </div>
    )
}
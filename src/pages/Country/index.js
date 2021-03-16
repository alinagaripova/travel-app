import LocalTime from "../../components/LocalTime/localTime";
import Exchange from "../../components/Exchange-rates/exch-rates";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Country.scss";
import Gallery from "../../components/Gallery/gallery";

function Country({ countries }) {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const index = countries && countries.findIndex((item) => item.id == id);
    setData(countries[index]);
  }, [countries]);
  return (
    <div className={"container country-data"}>
      <h1 className={"country-data__header"}>
        {data?.country} ({data?.capital})
      </h1>
      <div className={"country-data__body d-flex justify-content-around"}>
        <div>
          <img src={data?.main_image} alt="" />
        </div>
        <div className={"country-data__body_text px-3"}>{data?.description}</div>
      </div>
      <LocalTime country={data} />
      <Exchange country={data} />
      <Gallery />
    </div>
  );
}

export default Country;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryMap from '../../components/CountryMap';

import './Country.scss';

function Country({ countries }) {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const index = countries && countries.findIndex((item) => item.id == id);
    setData(countries[index]);
  }, [countries]);

  return (
    <div className={'container country-data'}>
      <h1 className={'country-data__header'}>
        {data?.country} ({data?.capital})
      </h1>
      <div className={'country-data__body d-flex justify-content-around'}>
        <div>
          <img src={data?.main_image} alt="" />
        </div>
        <div className={'country-data__body_text px-3'}>{data?.description}</div>
      </div>
      <div className={'country-map__header'}>
        <h2 className={'country-map__title'}>Карта страны</h2>
        <CountryMap />
      </div>
    </div>
  );
}

export default Country;

import { useEffect, useState } from "react";
import moment from "moment";
import "./exch-rates.scss";

export default function Exchange({ country }) {
  const [rates, setRates] = useState([]);
  const [mult, setMult] = useState(false);
  const [base, setBase] = useState("USD");
  const [vltname, setVltname] = useState("");

  useEffect(() => {
    if (country !== undefined) {
      setVltname(country.exchname);
      fetch(
        `https://api.exchangeratesapi.io/latest?base=${country.money}&symbols=USD,${
          country.money === "EUR" ? "" : "EUR,"
        }GBP,JPY,CNY`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setRates(objToArr(result.rates));
            setBase(result.base);
          },
          (error) => {
            console.log("error");
          }
        );
    }
  }, [base, country]);

  function objToArr(obj) {
    if (obj !== undefined) {
      let arr = [];
      for (const [key, value] of Object.entries(obj)) {
        if (value !== 1.0) {
          if (value < 0.01) {
            arr.push(`${(value * 100).toFixed(3)} ${key}`);
            setMult(true);
          } else {
            arr.push(`${value.toFixed(3)} ${key}`);
          }
        }
      }
      return arr;
    }
    return [];
  }

  return (
    <div className="exch-container">
      <div>{`Курсы валют на ${moment().format("DD MMMM YYYY")}`}</div>
      <div>{`Местная валюта: ${vltname === undefined ? "Загрузка..." : vltname}`}</div>

      <ul>
        {rates.map((item, i) => {
          return <li key={i}>{`${mult ? "100" : "1"} ${country.money} = ${item}`}</li>;
        })}
      </ul>
    </div>
  );
}

import moment from "moment";
import "moment/locale/ru";
import { useState } from "react";
import "./localTIme.scss";

export default function LocalTime({ country }) {
  moment.locale("ru");
  const [timer, setTime] = useState(moment().format("HH:mm:ss"));
  const [date, setDate] = useState(moment().format("DD MMMM YYYY"));
  const [weekday, setWeekday] = useState(moment().format("dddd"));
  let timeInterval = null;
  const timeUpdate = () => {
    clearInterval(timeInterval);
    if (country !== undefined && "time" in country) {
      timeInterval = setInterval(() => {
        setTime(moment().zone(country.time).format("HH:mm:ss"));
        setDate(moment().zone(country.time).format("DD MMMM YYYY"));
        setWeekday(moment().zone(country.time).format("dddd"));
      }, 1000);
    }
  };

  timeUpdate();

  return (
    <div className="localtime-container">
      <div>Местое время</div>
      <div className="localtime-clock">{timer}</div>
      <div className="localtime-clock">{weekday}</div>
      <div className="localtime-clock">{date}</div>
    </div>
  );
}

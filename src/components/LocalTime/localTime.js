import moment from "moment";
import { useState } from "react";
import "./localTIme.scss";

export default function LocalTime({ country }) {
  const [timer, setTime] = useState(moment().format("HH:mm:ss"));
  let timeInterval = null;
  const timeUpdate = () => {
    clearInterval(timeInterval);
    if (country !== undefined && "time" in country) {
      timeInterval = setInterval(() => {
        setTime(moment().zone(country.time).format("HH:mm:ss"));
      }, 1000);
    }
  };

  timeUpdate();

  return (
    <div className="localtime-container">
      <div>Местое время</div>
      <div className="localtime-clock">{timer}</div>
    </div>
  );
}

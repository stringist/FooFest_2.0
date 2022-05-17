import { useState, useEffect } from "react";
import Lineup from "../components/Lineup";
export default function Festival() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/schedule`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSchedule(data);
      });
  }, []);
  const midgard = schedule.Midgard;
  const vanaheim = schedule.Vanaheim;
  const jotunheim = schedule.Jotunheim;
  return (
    <section className="stages">
      <div className="days">
        <h2>Mon</h2>
        <h2>Tue</h2>
        <h2>Wed</h2>
        <h2>Thu</h2>
        <h2>Fri</h2>
        <h2>Sat</h2>
        <h2>Sun</h2>
      </div>
      <Lineup {...midgard}></Lineup>
      <Lineup {...jotunheim}></Lineup>
      <Lineup {...vanaheim}></Lineup>
    </section>
  );
}

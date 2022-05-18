import { useState, useEffect } from "react";
// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import "./App.css";
import "./paper.css";
import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

import Lineup from "./components/Lineup";

function App() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/schedule`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchedule(data);
        // setSchedule((old) => old.concat(data));
      });
  }, []);

  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch(`https://foofestival.herokuapp.com/events`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setEvents(data);
  //     });
  // }, []);
  // console.log(events);

  console.log(schedule);
  if (!schedule) {
    return null;
  }
  // console.log(schedule.Midgard);
  // Object.values(schedule).map((x) => console.log(x));
  // Object.keys(schedule).map((x) => console.log(x));
  // Object.entries(schedule).map((x) => console.log(x));

  const midgard = schedule.Midgard;
  // console.log(schedule.Midgard.mon);
  const vanaheim = schedule.Vanaheim;
  const jotunheim = schedule.Jotunheim;

  const monday3 = midgard.mon.concat(schedule.Vanaheim.mon, schedule.Jotunheim.mon);
  console.log(monday3);

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Festival</Link> | <Link to="/Booking">Booking</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Festival />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Midgard</th>
            <th>Jotunheim</th>
            <th>Vaneheim</th>
          </tr>
        </thead>
        <tbody>
          <td>
            {midgard.mon.map((act) => {
              return (
                <tr>
                  <td>
                    {act.start} - {act.end}
                  </td>
                </tr>
              );
            })}
          </td>
          <td>
            {midgard.mon.map((act) => {
              return (
                <tr>
                  <td>{act.act}</td>
                </tr>
              );
            })}
          </td>
          <td>
            {jotunheim.mon.map((act) => {
              return (
                <tr>
                  <td>{act.act}</td>
                </tr>
              );
            })}
          </td>
          <td>
            {vanaheim.mon.map((act) => {
              return (
                <tr>
                  <td>{act.act}</td>
                </tr>
              );
            })}
          </td>
        </tbody>
      </table>

      <section className="stages">
        <div className="days">
          <button
            onClick={() => {
              <>
                <Lineup stage={midgard} day={"monday"}></Lineup>
                <Lineup stage={jotunheim} day={"monday"}></Lineup>
                <Lineup stage={vanaheim} day={"monday"}></Lineup>
              </>;
            }}
          >
            Monday
          </button>
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
    </div>
  );
}

export default App;

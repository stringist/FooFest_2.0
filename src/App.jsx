import { useState, useEffect } from "react";
// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import "./App.css";
import "./paper.css"
import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

import Lineup from "./components/Lineup";

function App() {
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

  // console.log(schedule);
  // console.log(schedule.Midgard);
  // Object.values(schedule).map((x) => console.log(x));
  // Object.keys(schedule).map((x) => console.log(x));
  // Object.entries(schedule).map((x) => console.log(x));
  const midgard = schedule.Midgard;
  const vanaheim = schedule.Vanaheim;
  const jotunheim = schedule.Jotunheim;

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
    </div>
  );
}

export default App;

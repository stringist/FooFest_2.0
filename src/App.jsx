import { useState, useEffect } from "react";
// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import "./App.css";
import "./paper.css";
import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

import Lineup from "./components/Lineup";
import Table from "./components/Table";

function App() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);

  const [filteredM, setFilteredM] = useState([]);
  const [filteredJ, setFilteredJ] = useState([]);
  const [filteredV, setFilteredV] = useState([]);

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/schedule`)
      .then((res) => res.json())
      .then((data) => {
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

  function filterList(day) {
    console.log("list filtered");
    if (day === "monday") {
      setFilteredM(schedule.Midgard.mon);
      setFilteredJ(schedule.Jotunheim.mon);
      setFilteredV(schedule.Vanaheim.mon);
    } else if (day === "tuesday") {
      setFilteredM(schedule.Midgard.tue);
      setFilteredJ(schedule.Jotunheim.tue);
      setFilteredV(schedule.Vanaheim.tue);
    } else if (day === "wednesday") {
      setFilteredM(schedule.Midgard.wed);
      setFilteredJ(schedule.Jotunheim.wed);
      setFilteredV(schedule.Vanaheim.wed);
    } else if (day === "thursday") {
      setFilteredM(schedule.Midgard.thu);
      setFilteredJ(schedule.Jotunheim.thu);
      setFilteredV(schedule.Vanaheim.thu);
    } else if (day === "friday") {
      setFilteredM(schedule.Midgard.fri);
      setFilteredJ(schedule.Jotunheim.fri);
      setFilteredV(schedule.Vanaheim.fri);
    } else if (day === "saturday") {
      setFilteredM(schedule.Midgard.sat);
      setFilteredJ(schedule.Jotunheim.sat);
      setFilteredV(schedule.Vanaheim.sat);
    } else if (day === "sunday") {
      setFilteredM(schedule.Midgard.sun);
      setFilteredJ(schedule.Jotunheim.sun);
      setFilteredV(schedule.Vanaheim.sun);
    }
  }

  // console.log(schedule);
  if (!schedule) {
    return null;
  }

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

      <button
        onClick={() => {
          filterList("monday");
        }}
      >
        Monday
      </button>
      <button
        onClick={() => {
          filterList("tuesday");
        }}
      >
        Tuesday
      </button>
      <button
        onClick={() => {
          filterList("wednesday");
        }}
      >
        Wednesday
      </button>
      <button
        onClick={() => {
          filterList("thursday");
        }}
      >
        Thursday
      </button>
      <button
        onClick={() => {
          filterList("friday");
        }}
      >
        Friday
      </button>
      <button
        onClick={() => {
          filterList("saturday");
        }}
      >
        Saturday
      </button>
      <button
        onClick={() => {
          filterList("sunday");
        }}
      >
        Sunday
      </button>

      <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV}></Table>
    </div>
  );
}

export default App;

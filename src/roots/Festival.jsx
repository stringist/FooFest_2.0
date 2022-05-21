import { useState, useEffect } from "react";
// import filter from "just-filter";

import Booking from "./Booking";

import Table from "../components/Table";

export default function Festival() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);

  const [filteredM, setFilteredM] = useState([]);
  const [filteredJ, setFilteredJ] = useState([]);
  const [filteredV, setFilteredV] = useState([]);
  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
    setBandDisplayed([]);
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

  if (!schedule) {
    return null;
  }

  return (
    <div className="Festival">
      <h1>Festival</h1>
      <div className="festival__buttons">
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
      </div>

      <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV} bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Bands from "./Bands";

import Table from "../components/Table";
import ScheduleButtons from "../components/ScheduleButtons";

export default function Festival() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);

  const [filteredM, setFilteredM] = useState();
  const [filteredJ, setFilteredJ] = useState();
  const [filteredV, setFilteredV] = useState();
  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [day, setDay] = useState("Monday");

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/schedule`)
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
        setFilteredM(data.Midgard.mon);
        setFilteredJ(data.Jotunheim.mon);
        setFilteredV(data.Vanaheim.mon);
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

  if (!schedule) {
    return null;
  }

  return (
    <div className="Festival">
      <header>
        <nav>
          <Link to="/festival/lineup">Lineup</Link> | <Link to="/festival/bands">Bands</Link>
        </nav>
      </header>

      {/* <Routes>
        <Route path="/Lineup" element={<Lineup />} />
        <Route path="/Bands" element={<Bands />} />
      </Routes> */}

      <h1>Lineup</h1>

      <ScheduleButtons setFilteredM={setFilteredM} setFilteredJ={setFilteredJ} setFilteredV={setFilteredV} midgard={schedule.Midgard} jotunheim={schedule.Jotunheim} vanaheim={schedule.Vanaheim} setDay={setDay} day={day} />

      <h2>{day}</h2>

      <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV} bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

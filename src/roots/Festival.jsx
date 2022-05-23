import { useState, useEffect } from "react";
// import filter from "just-filter";

import Booking from "./Booking";

import Table from "../components/Table";
import BandsList from "../components/BandsList";
import ScheduleButtons from "../components/ScheduleButtons";

export default function Festival() {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);

  const [filteredM, setFilteredM] = useState();
  const [filteredJ, setFilteredJ] = useState();
  const [filteredV, setFilteredV] = useState();
  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);

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
      <h1>Festival</h1>

      <ScheduleButtons setFilteredM={setFilteredM} setFilteredJ={setFilteredJ} setFilteredV={setFilteredV} midgard={schedule.Midgard} jotunheim={schedule.Jotunheim} vanaheim={schedule.Vanaheim} />

      <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV} bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />

      <BandsList bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

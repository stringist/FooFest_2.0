import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import programStyles from "/sass/modules/_Program.module.scss";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Table from "../components/Table";
import ScheduleButtons from "../components/ScheduleButtons";
import Bands from "./Bands";

export default function Program() {
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
    <div className={programStyles.Program}>
      <Menu />

      <h1>Program</h1>

      <ScheduleButtons setFilteredM={setFilteredM} setFilteredJ={setFilteredJ} setFilteredV={setFilteredV} midgard={schedule.Midgard} jotunheim={schedule.Jotunheim} vanaheim={schedule.Vanaheim} setDay={setDay} day={day} />

      <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV} bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />

      <Footer />
    </div>
  );
}

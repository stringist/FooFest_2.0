import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import landingStyles from "/sass/modules/_Landing.module.scss";

import Booking from "./Booking";

import Program from "./Program";
import Bands from "./Bands";

import LandingHero from "../components/LandingHero";
import LatestNews from "../components/LatestNews";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
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
    <div className={landingStyles.Festival}>
      <header>
        <nav>
          <Link to="/program">Program</Link> | <Link to="/bands">Bands</Link>
        </nav>
      </header>
      <Menu />
      <LandingHero />

      <LatestNews />
      <h3>Sponsors</h3>
      <div className={landingStyles.sponsors}>
        <img src="/img/tuborg.png" alt="" />
        <img src="/img/tuborg.png" alt="" />
        <img src="/img/tuborg.png" alt="" />
        <img src="/img/tuborg.png" alt="" />
        <img src="/img/tuborg.png" alt="" />
        <img src="/img/tuborg.png" alt="" />
      </div>

      <Footer />
    </div>
  );
}

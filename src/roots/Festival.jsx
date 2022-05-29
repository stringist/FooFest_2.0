import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import landingStyles from "/sass/modules/_Landing.module.scss";

import LandingHero from "../components/landing/LandingHero";
import LatestNews from "../components/landing/LatestNews";
import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";

export default function Festival(props) {
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
      <Menu user={props.user} />

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

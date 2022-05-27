import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";

import Program from "./Program";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BandsList from "../components/BandsList";
import HeroBanner from "../components/HeroBanner";

export default function Festival() {
  const [schedule, setSchedule] = useState(null);

  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Menu />
      <div className="bands">
        <HeroBanner img="/img/bands_background.png" title="Artists" />

        <BandsList bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />
      </div>
      <Footer />
    </>
  );
}

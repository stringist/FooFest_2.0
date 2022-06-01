import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";

import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";
import BandsList from "../components/artists/BandsList";

export default function Bands(props) {
  const [loadingBands, setLoadingBands] = useState(false);

  const [bandDisplay, setBandDisplayed] = useState([]);

  return (
    <>
      <Menu user={props.user} />

      <div className="bands">
        <HeroBanner img="/img/bands_background.png" title="Artists" />

        <BandsList bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={props.favourites} setFavourites={props.setFavourites} setLoadingBands={setLoadingBands} />
      </div>
      <Footer />
    </>
  );
}

import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Program from "./Program";

import BandsList from "../components/BandsList";

export default function Festival() {
  const [schedule, setSchedule] = useState(null);

  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="bands">
      <header>
        <nav>
          <Link to="/program">Program</Link> | <Link to="/bands">Bands</Link>
        </nav>
      </header>

      <h1>Bands</h1>

      <BandsList bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

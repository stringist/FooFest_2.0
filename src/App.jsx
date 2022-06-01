import { useState, useEffect } from "react";

import generalStyles from "../sass/modules/_General.module.scss";

import { Link, Routes, Route } from "react-router-dom";
import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import Profile from "./roots/Profile";
// These are for the react-reroute

function App() {
  const [user, setUser] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <div className={generalStyles.App}>
      <Routes>
        <Route path="/" element={<Festival user={user} setUser={setUser} />} />
        <Route path="/tickets" element={<Booking user={user} setUser={setUser} />} />
        <Route path="/program" element={<Program user={user} setUser={setUser} setFavourites={setFavourites} favourites={favourites} />} />
        <Route path="/artists" element={<Bands user={user} setUser={setUser} setFavourites={setFavourites} favourites={favourites} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} setFavourites={setFavourites} favourites={favourites} />} />
      </Routes>
    </div>
  );
}

export default App;

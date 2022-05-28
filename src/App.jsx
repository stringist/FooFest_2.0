import { useState } from "react";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import Profile from "./roots/Profile";
import "./App.css";
// import "./paper.css";

import GeneralStyles from "../sass/modules/_General.module.scss";
import LandingStyles from "../sass/modules/_Landing.module.scss";

import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Festival user={user} setUser={setUser} />} />
        <Route path="/tickets" element={<Booking user={user} setUser={setUser} />} />
        <Route path="/program" element={<Program user={user} setUser={setUser} />} />
        <Route path="/artists" element={<Bands user={user} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;

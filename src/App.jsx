import { useState, useEffect } from "react";
// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Lineup from "./roots/Lineup";
import Bands from "./roots/Bands";
import "./App.css";
import "./paper.css";
import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/festival">Festival</Link> | <Link to="/booking">Booking</Link>
          {/* <Link to="/festival/lineup">Lineup</Link> | <Link to="festival/bands">Bands</Link> */}
        </nav>
      </header>

      <Routes>
        <Route path="/festival" element={<Festival />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/festival/lineup" element={<Lineup />} />
        <Route path="/festival/bands" element={<Bands />} />
      </Routes>
    </div>
  );
}

export default App;

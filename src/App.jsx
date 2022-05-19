import { useState, useEffect } from "react";
// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
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
          <Link to="/Festival">Festival</Link> | <Link to="/Booking">Booking</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;

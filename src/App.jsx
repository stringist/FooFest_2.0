import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import Login from "./roots/Login";
import "./App.css";
// import "./paper.css";

import GeneralStyles from "../sass/modules/_General.module.scss";
import LandingStyles from "../sass/modules/_Landing.module.scss";

import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Festival />} />
        <Route path="/tickets" element={<Booking />} />
        <Route path="/program" element={<Program />} />
        <Route path="/artists" element={<Bands />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

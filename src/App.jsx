import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import "./App.css";
// import "./paper.css";

import GeneralStyles from "../sass/modules/_General.module.scss";
import LandingStyles from "../sass/modules/_Landing.module.scss";

import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Festival</Link> | <Link to="/tickets">Tickets</Link>
          {/* <Link to="/festival/lineup">Lineup</Link> | <Link to="festival/bands">Bands</Link> */}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Festival />} />
        <Route path="/tickets" element={<Booking />} />
        <Route path="/program" element={<Program />} />
        <Route path="/bands" element={<Bands />} />
      </Routes>
    </div>
  );
}

export default App;

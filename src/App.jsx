import { useState } from "react";
import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import "./App.css";

// temporary paper css
import "./paper.css"

import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Festival</Link> | <Link to="/Booking">Booking</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Festival />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;

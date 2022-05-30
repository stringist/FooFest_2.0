import { useState } from "react";

import { Link, Routes, Route } from "react-router-dom";
import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import Profile from "./roots/Profile";
// These are for the react-reroute

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Festival user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/tickets" element={<Booking user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/program" element={<Program user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/artists" element={<Bands user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </div>
  );
}

export default App;

// import filter from "just-filter";

import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
// These are for the react-reroute

function App() {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch(`https://foofestival.herokuapp.com/events`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setEvents(data);
  //     });
  // }, []);
  // console.log(events);

  // console.log(schedule);
  // console.log(schedule.Midgard);
  // Object.values(schedule).map((x) => console.log(x));
  // Object.keys(schedule).map((x) => console.log(x));
  // Object.entries(schedule).map((x) => console.log(x));

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

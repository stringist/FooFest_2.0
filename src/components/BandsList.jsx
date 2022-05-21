import { useState, useEffect } from "react";
import FilterButton from "./FilterButton";

export default function BandsList() {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
      });
  }, []);

  console.log(bands.data);

  if (bands.data === "") {
    return null;
  }
  const filtered = filter === "All" ? bands.data : bands.data.filter((band) => band.genre === filter);

  // function showBand(bandName) {
  //   const i = bands.data.findIndex((band) => band.name == bandName);
  //   props.setBandDisplayed(bands.data[i]);
  //   // console.log(i);
  // }

  return (
    <div className="festival__bandList">
      {console.log(genres)}
      <button onClick={() => setFilter("Rock" || "Alternative Rock")}></button>
      <FilterButton setFilter={setFilter} filter={filter} name="All" />
      <FilterButton setFilter={setFilter} filter={filter} name="Rock" />
      <FilterButton setFilter={setFilter} filter={filter} name="Heavy Metal" />
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Midgard</th>
            <th>Jotunheim</th>
            <th>Vaneheim</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((band) => {
            return (
              <tr>
                <td>{band.name}</td>
                <td>{band.genre}</td>
                {/* {setGenres((old) => old.concat(band.genre))} */}
                {function genres() {
                  if (genres.find((item) => item === band.genre)) {
                    console.log("genre duplicated");
                    setGenres((old) => old.filter((item) => item !== band.name));
                  } else {
                    setGenres((old) => old.concat(band.genre));
                    console.log("genre added to the list");
                  }
                }}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <BandInfo bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} favourites={props.favourites} setFavourites={props.setFavourites}></BandInfo> */}
    </div>
  );
}

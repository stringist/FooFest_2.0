import { useState, useEffect } from "react";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import BandPage from "./BandPage";
import BandListTable from "./BandListTable";

export default function BandsList(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name");
  const [searched, setSearched] = useState("");
  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
      });
  }, []);

  // console.log(bands.data);

  if (bands.data === "") {
    return null;
  }

  const filtered = filter === "All" ? bands.data : filter === "Others" ? bands.data.filter((band) => !band.genre.includes("Rock") && !band.genre.includes("Metal")) : bands.data.filter((band) => band.genre.includes(filter));

  sortDir === "asc" ? filtered.sort((a, b) => a[sort] > b[sort]) : filtered.sort((a, b) => a[sort] < b[sort]);

  return (
    <div className="festival__bandList">
      <SearchBar searched={searched} setSearched={setSearched} bands={bands.data} />

      <FilterButtons setFilter={setFilter} filter={filter} />

      {searched === "" ? <h3>{filter}</h3> : null}

      <BandListTable bands={bands.data} searched={searched} filtered={filtered} bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} setSort={setSort} setSortDir={setSortDir} />

      <BandPage bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} favourites={props.favourites} setFavourites={props.setFavourites} />
    </div>
  );
}

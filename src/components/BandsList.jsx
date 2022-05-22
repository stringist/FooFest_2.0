import { useState, useEffect } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import BandPage from "./BandPage";
import BandListTable from "./BandListTable";

export default function BandsList(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [searched, setSearched] = useState("");

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

  return (
    <div className="festival__bandList">
      <SearchBar searched={searched} setSearched={setSearched} bands={bands.data} />

      <FilterButton setFilter={setFilter} filter={filter} name="All" />
      <FilterButton setFilter={setFilter} filter={filter} name="Rock" />
      <FilterButton setFilter={setFilter} filter={filter} name="Heavy Metal" />

      <BandListTable bands={bands.data} searched={searched} filtered={filtered} bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} />

      <BandPage bandDisplay={props.bandDisplay} setBandDisplayed={props.setBandDisplayed} favourites={props.favourites} setFavourites={props.setFavourites} />
    </div>
  );
}

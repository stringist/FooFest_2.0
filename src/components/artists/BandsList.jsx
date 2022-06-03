import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import generalStyles from "/sass/modules/_General.module.scss";
import bandsStyles from "/sass/modules/_Bands.module.scss";

import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import BandPage from "./BandPage";
import BandListTable from "./BandListTable";
import SortToggle from "./SortToggle";
import MyLoader from "../general/MyLoader";

export default function BandsList(props) {
  const [bands, setBands] = useState({
    data: "",
    loading: true,
  });

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name");
  const [searched, setSearched] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const [loadingBands, setLoadingBands] = useState(false);

  useEffect(() => {
    setLoadingBands(true);
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands({ data: data, loading: false });
        setLoadingBands(false);
      });
  }, []);

  if (bands.data === "") {
    return null;
  }

  const filtered =
    filter === "All"
      ? bands.data
      : filter === "Others"
      ? bands.data.filter(
          (band) =>
            !band.genre.includes("Rock") && !band.genre.includes("Metal")
        )
      : bands.data.filter((band) => band.genre.includes(filter));

  sortDir === "asc"
    ? filtered.sort((a, b) => a[sort] > b[sort])
    : filtered.sort((a, b) => a[sort] < b[sort]);

  return (
    <>
      {loadingBands && <MyLoader />}
      {!loadingBands && (
        <div className={bandsStyles.festival__bandList}>
          <div className={bandsStyles.festival__bandList__filters}>
            <FilterButtons setFilter={setFilter} filter={filter} />
            <SearchBar
              searched={searched}
              setSearched={setSearched}
              bands={bands.data}
            />
          </div>
          {/* <SortToggle name="Sort by name" setSort={setSort} setSortDir={setSortDir} sortKey={"name"} /> */}

          {searched === "" ? (
            <h3 className={bandsStyles.festival__bandList}>{filter}</h3>
          ) : (
            <h3 className={bandsStyles.festival__bandList}>Results</h3>
          )}

          <BandListTable
            bands={bands.data}
            searched={searched}
            filtered={filtered}
            bandDisplay={props.bandDisplay}
            setBandDisplayed={props.setBandDisplayed}
            setSort={setSort}
            setSortDir={setSortDir}
          />

          <BandPage
            bandDisplay={props.bandDisplay}
            setBandDisplayed={props.setBandDisplayed}
            favourites={props.favourites}
            setFavourites={props.setFavourites}
          />
        </div>
      )}
    </>
  );
}

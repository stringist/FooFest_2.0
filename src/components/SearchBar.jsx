import { useState } from "react";

export default function SearchBar(props) {
  function searchBands(e) {
    console.log(e.target.value);
    const input = e.target.value.toUpperCase();

    const searchedBands = props.bands.filter((band) => {
      return band.name.toUpperCase().includes(input) || band.genre.toUpperCase().includes(input);
    });

    input === "" ? props.setSearched("") : props.setSearched(searchedBands);
  }

  return <input type="text" id="searchBar" onKeyUp={searchBands} placeholder="Search..." />;
}

import { useState } from "react";

export default function SearchBar(props) {
  function searchBands(e) {
    const input = e.target.value.toUpperCase();

    const searchedBands = props.bands.filter((band) => {
      return band.name.toUpperCase().includes(input);
    });

    props.setSearched(searchedBands);
  }

  return <input type="text" id="searchBar" onKeyUp={searchBands} placeholder="Search..." />;
}

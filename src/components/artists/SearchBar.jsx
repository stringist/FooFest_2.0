import { useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function SearchBar(props) {
  // const [input, setInput] = useState("");
  const search = useRef();

  function searchBands(e) {
    const input = e.target.value.toLowerCase();

    const searchedBands = props.bands.filter((band) => {
      return band.name.toLowerCase().includes(input);
    });
    props.setSearched(searchedBands);
  }

  return (
    <div className={bandsStyles.search}>
      <label htmlFor="">Search</label>
      <div className={bandsStyles.search__input}>
        <input type="text" id="searchBar" ref={search} onChange={searchBands} />
        <AiOutlineSearch />
      </div>
    </div>
  );
}

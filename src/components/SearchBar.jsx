import { useState, useRef } from "react";
import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const search = useRef();

  function searchBands(e) {
    // console.log(e.target.value);
    setInput(e.target.value.toLowerCase());

    const searchedBands = props.bands.filter((band) => {
      return band.name.toLowerCase().includes(input);
    });
    input === "" ? props.setSearched("") : props.setSearched(searchedBands);
    // console.log(searchedBands);
  }

  return (
    <div className={bandsStyles.search}>
      <label htmlFor="">Search</label>
      <div className={bandsStyles.search__input}>
        <input type="text" id="searchBar" ref={search} onChange={searchBands} value={input} />
      </div>
    </div>
  );
}

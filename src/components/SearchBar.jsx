import { useState, useRef } from "react";
import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function SearchBar(props) {
  const [input, setInput] = useState("");
  const search = useRef();

  function searchBands(e) {
    console.log(e.target.value);
    setInput(e.target.value.toLowerCase());

    const searchedBands = props.bands.filter((band) => {
      return band.name.toLowerCase().includes(input);
    });
    input === "" ? props.setSearched("") : props.setSearched(searchedBands);
    console.log(searchedBands);
  }

  function clearInput() {
    setInput("");
    props.setSearched("");
    search.current.value = "";
  }

  return (
    <div className={bandsStyles.search}>
      <label htmlFor="">Search</label>
      <div className={bandsStyles.search__input}>
        <input type="text" id="searchBar" ref={search} onChange={searchBands} value={input} />
        {input === "" ? (
          <button onClick={searchBands}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path d="M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z" />
            </svg>
          </button>
        ) : (
          <button onClick={clearInput}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

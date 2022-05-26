import { useState } from "react";

import bandsStyles from "/sass/modules/_Bands.module.scss";

import FilterButton from "./FilterButton";

export default function FilterButtons(props) {
  const [showFilters, setShowFilters] = useState(false);

  const handleClick = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <>
      <button className={bandsStyles.filter__button} onClick={handleClick}>
        <p>Filter Artists</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </button>
      <div className={`${bandsStyles.filters__buttons} ${showFilters ? bandsStyles.showFilters : bandsStyles.hideFilters}`}>
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="All" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Rock" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Metal" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Others" setShowFilters={setShowFilters} />
      </div>
    </>
  );
}

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
      <div className={bandsStyles.filter__button} onClick={handleClick}>
        <p>Filter Artists</p>
        {showFilters === true ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M14.15 30.15 12 28 24 16 36 28 33.85 30.15 24 20.3Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 30.8 12 18.8 14.15 16.65 24 26.5 33.85 16.65 36 18.8Z" />
          </svg>
        )}
      </div>
      <div className={`${bandsStyles.filters__buttons} ${showFilters ? bandsStyles.showFilters : bandsStyles.hideFilters}`}>
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="All" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Rock" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Metal" setShowFilters={setShowFilters} />
        <FilterButton setFilter={props.setFilter} filter={props.filter} name="Others" setShowFilters={setShowFilters} />
      </div>
    </>
  );
}

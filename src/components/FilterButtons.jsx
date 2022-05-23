import { useState } from "react";
import FilterButton from "./FilterButton";

export default function FilterButtons(props) {
  return (
    <>
      <FilterButton setFilter={props.setFilter} filter={props.filter} name="All" />
      <FilterButton setFilter={props.setFilter} filter={props.filter} name="Rock" />
      <FilterButton setFilter={props.setFilter} filter={props.filter} name="Heavy Metal" />
    </>
  );
}

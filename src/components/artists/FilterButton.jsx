import { useState } from "react";

export default function FilterButton(props) {
  const closeFilters = () => {
    console.log("close filters");
    props.setShowFilters(false);
  };
  return (
    <button
      onClick={() => {
        props.setFilter(props.name);
        closeFilters();
      }}
    >
      {props.name}
    </button>
  );
}

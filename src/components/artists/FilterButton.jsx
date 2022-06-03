import { useState } from "react";

export default function FilterButton(props) {
  const closeFilters = () => {
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

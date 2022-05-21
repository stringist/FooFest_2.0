import { useState } from "react";

export default function FilterButton(props) {
  return <button onClick={() => props.setFilter(props.name)}>{props.name}</button>;
}

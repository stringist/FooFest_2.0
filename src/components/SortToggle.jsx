export default function SortToggle(props) {
  function handleClick() {
    props.setSort(props.sortKey);

    props.setSortDir((old) => (old === "asc" ? "desc" : "asc"));
  }

  return <button onClick={handleClick}>{props.name}</button>;
}

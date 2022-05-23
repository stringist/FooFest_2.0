export default function SortToggle(props) {
  function handleClick() {
    props.setSort(props.sortKey);

    props.setSortDir((old) => (old === "asc" ? "desc" : "asc"));
  }

  return (
    <th>
      <button onClick={handleClick}>{props.name}</button>
    </th>
  );
}

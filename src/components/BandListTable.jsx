import SortToggle from "./SortToggle";

export default function BandListTable(props) {
  function showBand(bandName) {
    const i = props.bands.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(props.bands[i]);
    // console.log(i);
  }

  return (
    <table>
      <thead>
        <SortToggle name="Band" setSort={props.setSort} setSortDir={props.setSortDir} sortKey={"name"} />
        <SortToggle name="Genre" setSort={props.setSort} setSortDir={props.setSortDir} sortKey={"genre"} />
      </thead>
      <tbody>
        {props.searched === ""
          ? props.filtered.map((band) => {
              return (
                <tr>
                  <td>
                    <button onClick={() => showBand(band.name)}>{band.name}</button>
                  </td>
                  <td>{band.genre}</td>
                </tr>
              );
            })
          : props.searched.map((band) => {
              return (
                <tr>
                  <td>
                    <button onClick={() => showBand(band.name)}>{band.name}</button>
                  </td>
                  <td>{band.genre}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}

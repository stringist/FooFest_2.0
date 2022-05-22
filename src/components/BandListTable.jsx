export default function BandListTable(props) {
  function showBand(bandName) {
    const i = props.bands.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(props.bands[i]);
    // console.log(i);
  }

  return (
    <table>
      <tbody>
        {props.searched === ""
          ? props.filtered.map((band) => {
              return (
                <tr>
                  <button onClick={() => showBand(band.name)}>
                    <td>{band.name}</td>
                  </button>

                  <td>{band.genre}</td>
                </tr>
              );
            })
          : props.searched.map((band) => {
              return (
                <tr>
                  <button onClick={() => showBand(band.name)}>
                    <td>{band.name}</td>
                  </button>
                  <td>{band.genre}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}

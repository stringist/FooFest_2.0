import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function BandListTable(props) {
  function showBand(bandName) {
    console.log("shw band clicked");
    const i = props.bands.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(props.bands[i]);
    console.log(props.bandDisplayed);
    // console.log(i);
  }

  return (
    <>
      {/* <SortToggle name="Genre" setSort={props.setSort} setSortDir={props.setSortDir} sortKey={"genre"} /> */}
      {props.searched === ""
        ? props.filtered.map((band) => {
            return (
              <div className={bandsStyles.band__card} onClick={() => showBand(band.name)}>
                <figure>
                  {band.logo.includes("http") ? <img src={band.logo} alt={band.name} /> : <img src={`https://foofestival.herokuapp.com/logos/${band.logo}`} alt={band.name} />}
                  {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
                </figure>
                <h4>{band.name}</h4>
              </div>
            );
          })
        : props.searched.map((band) => {
            return (
              <div className={bandsStyles.band__card} onClick={() => showBand(band.name)}>
                <figure>
                  {band.logo.includes("http") ? <img src={band.logo} alt={band.name} /> : <img src={`https://foofestival.herokuapp.com/logos/${band.logo}`} alt={band.name} />}
                  {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
                </figure>
                <h4>{band.name}</h4>
              </div>
            );
          })}
    </>
  );
}

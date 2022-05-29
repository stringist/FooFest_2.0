import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function BandPage(props) {
  const band = { ...props.bandDisplay };
  // console.log(props.bandDisplay);

  function switchFav() {
    if (props.favourites.find((item) => item.name === band.name)) {
      console.log("band removed from the fav list");
      props.setFavourites((old) => old.filter((item) => item.name !== band.name));
    } else {
      props.setFavourites((old) => old.concat(band));
      console.log("band added to the fav list");
    }
  }

  if (band.name != undefined) {
    return (
      <div className={bandsStyles.festival__bandList__page}>
        <button onClick={() => props.setBandDisplayed([null])}>
          <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        </button>

        <h2>{band.name}</h2>
        <h4>
          <em>{band.genre}</em>
        </h4>
        <figure>
          {band.logo.includes("http") ? <img src={band.logo} alt={band.name} /> : <img src={`https://foofestival.herokuapp.com/logos/${band.logo}`} alt={band.name} />}
          {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
        </figure>
        <p>{band.bio}</p>
        <button onClick={switchFav} className={bandsStyles.favourite}>
          {props.favourites.find((item) => item.name === band.name) ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1ZM24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15Q24 23.15 24 23.15ZM24 38Q31.6 31 36.3 25.85Q41 20.7 41 15.85Q41 12.55 38.875 10.425Q36.75 8.3 33.5 8.3Q31 8.3 28.8 9.85Q26.6 11.4 25.2 14.3H22.75Q21.4 11.4 19.175 9.85Q16.95 8.3 14.5 8.3Q11.2 8.3 9.1 10.425Q7 12.55 7 15.85Q7 20.7 11.7 25.85Q16.4 31 24 38Z" />
            </svg>
          )}
        </button>
      </div>
    );
  }
}

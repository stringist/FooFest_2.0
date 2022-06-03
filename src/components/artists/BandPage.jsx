// import bandsStyles from "/sass/modules/_Bands.module.scss";
import detail from "/sass/modules/_BandDetail.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BandPage(props) {
  const band = { ...props.bandDisplay };

  function switchFav() {
    if (props.favourites.find((item) => item.name === band.name)) {
      props.setFavourites((old) =>
        old.filter((item) => item.name !== band.name)
      );
    } else {
      props.setFavourites((old) => old.concat(band));
    }
  }

  if (band.name != undefined) {
    return (
      <div className={detail.bandDetail}>
        <div className={detail.buttons}>
          <button onClick={() => props.setBandDisplayed([])}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className={detail.topWrapper}>
          <figure>
            {band.logo.includes("http") ? (
              <LazyLoadImage
                effect="blur"
                src={band.logo}
                alt={band.name}
                placeholderSrc="/img/ff_logo.svg"
              />
            ) : (
              <LazyLoadImage
                effect="blur"
                src={`https://foofestival.herokuapp.com/logos/${band.logo}`}
                alt={band.name}
                placeholderSrc="/img/ff_logo.svg"
              />
            )}
            {band.logoCredits ? (
              <figcaption>{band.logoCredits}</figcaption>
            ) : null}
          </figure>
          <div className={detail.textWrapper}>
            <h2>{band.name}</h2>
            <h4>{band.genre}</h4>
          </div>
        </div>
        <p>{band.bio}</p>
      </div>
    );
  }
}

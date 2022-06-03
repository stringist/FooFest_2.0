import { useState, useEffect } from "react";
import createUID from "create-unique-id";

import bandsStyles from "/sass/modules/_Bands.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BandListTable(props) {
  const [page, setPage] = useState(0);
  const [nPages, setNPages] = useState(0);

  const bandsPerPage = 15;

  useEffect(() => {
    props.searched === ""
      ? setNPages(Math.ceil(props.filtered.length / bandsPerPage))
      : setNPages(Math.ceil(props.searched.length / bandsPerPage));
  }, [props.filtered.length, props.searched.length]);

  function showBand(bandName) {
    const i = props.bands.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(props.bands[i]);
  }

  const buttonss = [...Array(nPages)].map((e, i) =>
    page === i ? (
      <button
        key={i + 1}
        onClick={() => handleClick(i)}
        className={bandsStyles.active}
      >
        {i + 1}
      </button>
    ) : (
      <button key={i + 1} onClick={() => handleClick(i)}>
        {i + 1}
      </button>
    )
  );

  function handleClick(page) {
    setPage(page);
    console.log(page);
  }

  function previousPage() {
    setPage((old) => old - 1);
  }
  function nextPage() {
    setPage((old) => old + 1);
  }

  return (
    <>
      <div className={bandsStyles.band__grid}>
        {/* <SortToggle name="Genre" setSort={props.setSort} setSortDir={props.setSortDir} sortKey={"genre"} /> */}
        {props.searched === ""
          ? props.filtered
              .slice(page * bandsPerPage, page * bandsPerPage + bandsPerPage)
              .map((band) => {
                const path = band.logo.includes("http")
                  ? band.logo
                  : `https://foofestival.herokuapp.com/logos/${band.logo}`;
                // console.log(path);
                return (
                  <div
                    className={bandsStyles.band__card}
                    onClick={() => showBand(band.name)}
                    key={createUID(4)}
                  >
                    <div className={bandsStyles.band__card__img}>
                      {path.includes("svg") ? (
                        <LazyLoadImage
                          effect="blur"
                          src={path}
                          alt={band.name}
                          placeholderSrc="/img/ff_logo.svg"
                          className={bandsStyles.fill}
                        />
                      ) : (
                        <LazyLoadImage
                          effect="blur"
                          src={path}
                          alt={band.name}
                          placeholderSrc="/img/ff_logo.svg"
                        />
                      )}
                    </div>
                    {band.logoCredits ? <p>{band.logoCredits}</p> : null}
                    <h4>{band.name}</h4>
                  </div>
                );
              })
          : props.searched
              .slice(page * bandsPerPage, page * bandsPerPage + bandsPerPage)
              .map((band) => {
                const path = band.logo.includes("http")
                  ? band.logo
                  : `https://foofestival.herokuapp.com/logos/${band.logo}`;
                return (
                  <div
                    className={bandsStyles.band__card}
                    onClick={() => showBand(band.name)}
                    key={createUID(4)}
                  >
                    <div className={bandsStyles.band__card__img}>
                      {path.includes("svg") ? (
                        <LazyLoadImage
                          effect="blur"
                          src={path}
                          alt={band.name}
                          placeholderSrc="/img/ff_logo.svg"
                          className={bandsStyles.fill}
                        />
                      ) : (
                        <LazyLoadImage
                          effect="blur"
                          src={path}
                          alt={band.name}
                          placeholderSrc="/img/ff_logo.svg"
                        />
                      )}
                      {/* <LazyLoadImage effect="blur" src={path} alt={band.name} placeholderSrc="/img/ff_logo.svg" /> */}
                    </div>
                    {band.logoCredits ? <p>{band.logoCredits}</p> : null}
                    <h4>{band.name}</h4>
                  </div>
                );
              })}
      </div>

      <div className={bandsStyles.pagination}>
        <button className={bandsStyles.paginationButton} onClick={previousPage}>
          &#60;&#60; Previous
        </button>
        {buttonss}
        <button className={bandsStyles.paginationButton} onClick={nextPage}>
          Next &#62;&#62;
        </button>
      </div>
    </>
  );
}

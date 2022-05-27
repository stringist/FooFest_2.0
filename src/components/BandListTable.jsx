import { useState, useEffect } from "react";

import bandsStyles from "/sass/modules/_Bands.module.scss";

export default function BandListTable(props) {
  const [page, setPage] = useState(0);
  const [nPages, setNPages] = useState(0);
  const [pageButtons, setPageButtons] = useState([]);

  const bandsPerPage = 15;

  useEffect(() => {
    props.searched === "" ? setNPages(Math.ceil(props.filtered.length / bandsPerPage)) : setNPages(Math.ceil(props.searched.length / bandsPerPage));
    createPageButton();
  }, [props.filtered.length, props.searched.length]);

  function showBand(bandName) {
    console.log("shw band clicked");
    const i = props.bands.findIndex((band) => band.name == bandName);
    props.setBandDisplayed(props.bands[i]);
    // console.log(props.bandDisplayed);
    // console.log(i);
  }

  function createPageButton() {
    setPageButtons([]);
    for (let i = 0; i < nPages; i++) setPageButtons((old) => old.concat(<button>Page{i + 1}</button>));
  }

  function handleClick(page) {
    setPage(page);
    console.log(page);
  }

  return (
    <>
      <div className={bandsStyles.band__grid}>
        {/* <SortToggle name="Genre" setSort={props.setSort} setSortDir={props.setSortDir} sortKey={"genre"} /> */}
        {props.searched === ""
          ? props.filtered.slice(page * bandsPerPage, page * bandsPerPage + bandsPerPage).map((band) => {
              console.log(props.filtered.length);
              const path = band.logo.includes("http") ? band.logo : `https://foofestival.herokuapp.com/logos/${band.logo}`;
              // console.log(path);
              return (
                <div className={bandsStyles.band__card} onClick={() => showBand(band.name)}>
                  <div className={bandsStyles.band__card__img} style={{ backgroundImage: `url(${path})` }}></div>
                  {band.logoCredits ? <p>{band.logoCredits}</p> : null}
                  <h4>{band.name}</h4>
                </div>
              );
            })
          : props.searched.slice(page * bandsPerPage, page * bandsPerPage + bandsPerPage).map((band) => {
              // console.log(props.searched.length);
              const path = band.logo.includes("http") ? band.logo : `https://foofestival.herokuapp.com/logos/${band.logo}`;
              return (
                <div className={bandsStyles.band__card} onClick={() => showBand(band.name)}>
                  <div className={bandsStyles.band__card__img} style={{ backgroundImage: `url(${path})` }}></div>
                  {band.logoCredits ? <p>{band.logoCredits}</p> : null}
                  <h4>{band.name}</h4>
                </div>
              );
            })}
      </div>
      <div className={bandsStyles.pagination}>
        Pagination
        <p>{nPages}</p>
        {pageButtons}
      </div>
    </>
  );
}

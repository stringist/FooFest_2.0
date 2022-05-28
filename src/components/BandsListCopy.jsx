import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import generalStyles from "/sass/modules/_General.module.scss";
import bandsStyles from "/sass/modules/_Bands.module.scss";

import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import BandPage from "./BandPage";
import BandListTable from "./BandListTable";
import SortToggle from "./SortToggle";

export default function BandsList(props) {
  // const [bands, setBands] = useState({
  //   data: "",
  //   loading: true,
  // });
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bandsPerPage, setBandsPerPage] = useState(10);
  const [currentItems, setCurrentItems] = useState([]);

  const offset = currentPage * bandsPerPage;

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name");
  const [searched, setSearched] = useState("");
  const [sortDir, setSortDir] = useState("asc");

  useEffect(() => {
    setLoading(true);
    fetch(`https://foofestival.herokuapp.com/bands`)
      .then((res) => res.json())
      .then((data) => {
        setBands(data);
        setLoading(false);
      });
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    console.log("selected page");
    setCurrentPage(selectedPage);
    console.log(currentItems);
  }

  const currentPageData = bands.slice(offset, offset + bandsPerPage).map((band, index) => {
    <p>{band.name}</p>;
    {
      console.log(band.name);
    }
  });

  const totalPageCount = Math.ceil(bands.length / bandsPerPage);

  if (bands === "") {
    return null;
  }

  return (
    <>
      <h1>Hello</h1>
      {console.log(currentPageData)}
      {currentPageData}

      <ReactPaginate previousLabel="Previous" nextLabel="Next" pageCount={totalPageCount} onPageChange={handlePageClick} containerClassName={"pagination"}></ReactPaginate>
    </>
  );
}

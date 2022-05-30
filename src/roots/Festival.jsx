import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import landingStyles from "/sass/modules/_Landing.module.scss";

import LandingHero from "../components/landing/LandingHero";
import LatestNews from "../components/landing/LatestNews";
import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import MyLoader from "../components/general/MyLoader";

export default function Festival(props) {
  // useEffect(() => {
  //   props.setIsLoading(true);
  //   const timing = setTimeout(() => {
  //     props.setIsLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timing);
  // }, []);
  return (
    <div className={landingStyles.Festival}>
      {props.isLoading && <MyLoader message="Loading..." />}
      {!props.isLoading && (
        <>
          <Menu user={props.user} />

          <LandingHero />

          <LatestNews />
          <h3>Sponsors</h3>
          <div className={landingStyles.sponsors}>
            <img src="/img/tuborg.png" alt="" />
            <img src="/img/tuborg.png" alt="" />
            <img src="/img/tuborg.png" alt="" />
            <img src="/img/tuborg.png" alt="" />
            <img src="/img/tuborg.png" alt="" />
            <img src="/img/tuborg.png" alt="" />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

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
<main>
          <LatestNews />
          <h3>Sponsors</h3>
          <div className={landingStyles.sponsors}>
            <div>
              <img src="/img/tuborg.webp" alt="Tuborg logo" />
              <p>
                All rights reserved to <br></br>{" "}
                <a href="https://www.tuborg.com/en/">https://www.tuborg.com/</a>
              </p>
            </div>
            <div>
              <img src="/img/somersby.webp" alt="Somersby logo" />
              <p>
                All rights reserved to <br></br>
                <a href="https://www.somersby.com/en/">
                  https://www.somersby.com/
                </a>
              </p>
            </div>
            <div>
              <img
                src="/img/marshall.webp"
                alt="Marshall logo"
                className={landingStyles.marshal}
              />
              <p>
                All rights reserved to <br></br>
                <a href="https://www.marshall.com/en/">
                  https://www.marshall.com/
                </a>
              </p>
            </div>
          </div>
</main>
          <Footer />
        </>
      )}
    </div>
  );
}

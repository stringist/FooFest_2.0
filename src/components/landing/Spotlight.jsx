import { useRef, useState } from "react";
import landingStyles from "/sass/modules/_Landing.module.scss";

export default function News(props) {
  return (
    <a href="#" className={landingStyles.articles}>
      <h4>{props.title}</h4>

      <div className={landingStyles.spotlight}>
        <img className={landingStyles.band_logo} src="../img/nyt_logo_hvidt.png" alt="artist logo" />
        <img className={landingStyles.lg_img} src="../img/terminalist2.jpg" alt="band photo" />
        {props.desc !== "" ? (
          <div>
            <p>
              {props.desc}
              <br></br>
            </p>
            <p>{props.cta}</p>
          </div>
        ) : null}
      </div>
    </a>
  );
}

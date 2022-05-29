import { useRef, useState } from "react";
import landingStyles from "/sass/modules/_Landing.module.scss";

export default function News(props) {
  return (
    <a href="#" className={landingStyles.articles}>
      <h4>{props.title}</h4>

      <div className={landingStyles.content}>
        <img src={props.img} alt={props.title} />
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

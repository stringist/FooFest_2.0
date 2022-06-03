import generalStyles from "/sass/modules/_General.module.scss";
import landingStyles from "/sass/modules/_Landing.module.scss";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <div className={landingStyles.hero}>
      <img className={landingStyles.hero__logo} src="./img/final_logo.svg" alt="FooFest logo" />
      <h1 className={generalStyles.d_none}>FooFest</h1>
      <div className={landingStyles.hero__box}>
        <h3 className={landingStyles.genres}>Rock <span>||</span> Metal</h3>
        <h2>23-30 june 2022</h2>

        <button className={generalStyles.cta}>
          <Link to={"/tickets"}>Get tickets</Link>
        </button>
      </div>
      <img src="./img/arrow.svg" alt="arrow pointing down" />
    </div>
  );
}

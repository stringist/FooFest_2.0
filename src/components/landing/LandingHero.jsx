import generalStyles from "/sass/modules/_General.module.scss";
import landingStyles from "/sass/modules/_Landing.module.scss";

export default function LandingHero() {
  return (
    <div className={landingStyles.hero}>
      <img className={landingStyles.hero__logo} src="./img/logo.svg" alt="FooFest logo" />
      <h1 className={generalStyles.d_none}>FooFest</h1>
      <div className={landingStyles.hero__box}>
        <h3 className={landingStyles.genres}>Metal | Rock</h3>
        <h2>23-30 june 2022</h2>

        <a href="/tickets" className={generalStyles.cta}>
          Get tickets
        </a>
      </div>
      <img src="./img/arrow.svg" alt="arrow pointing down" />
    </div>
  );
}

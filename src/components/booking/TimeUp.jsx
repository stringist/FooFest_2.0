import generalStyles from "/sass/modules/_General.module.scss";

export default function TimeUp() {
  return (
    <div className={generalStyles.timeUp}>
      <p>Time is up!</p>
      <a className={generalStyles.cta} href="/tickets" onClick={resetBasket}>
        Start a new search
      </a>
    </div>
  );
}

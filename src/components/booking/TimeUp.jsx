import generalStyles from "/sass/modules/_General.module.scss";

export default function TimeUp(props) {
  function refresh() {
    props.setStep(1);
  }
  return (
    <div className={generalStyles.timeUp}>
      <p>Oh no, Time is up!</p>
      <a className={generalStyles.cta} onClick={refresh}>
        Start a new search
      </a>
    </div>
  );
}

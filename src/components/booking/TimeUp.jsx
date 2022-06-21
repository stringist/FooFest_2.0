import generalStyles from "/sass/modules/_General.module.scss";

export default function TimeUp(props) {
  function refresh() {
    props.setStep(1);
  }
  return (
    <div className={generalStyles.timeUp}>
      <p>Sorry, your checkout session has expired.</p>
      <button className={generalStyles.primaryButton} onClick={refresh}>
        Start a new search
      </button>
    </div>
  );
}

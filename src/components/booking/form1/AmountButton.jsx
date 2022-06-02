import form1Styles from "/sass/modules/_Form1.module.scss";

export default function AmountButton(props) {
  function reduceAmount(e) {
    props.setAmount((old) => old - 1);
  }
  function addAmount() {
    props.setAmount((old) => old + 1);
  }
  return (
    <>
      <div className={form1Styles.form__amount__row}>
        <div onClick={props.amount > 1 ? reduceAmount : null}>-</div>
        <input
          type="text"
          id={props.name}
          name={props.name}
          value={props.amount}
          min="1"
          inputMode="numeric"
          onChange={(e) => {
            props.setAmount(Number(e.target.value));
          }}
        />
        <div onClick={addAmount}>+</div>
      </div>
    </>
  );
}

export default function AmountButton(props) {
  return (
    <>
      {/* <label htmlFor="amount"></label> */}
      <input
        type="number"
        id={props.name}
        name={props.name}
        value={props.amount}
        min="1"
        inputMode="numeric"
        onChange={(e) => {
          props.setAmount(Number(e.target.value));
        }}
      />
    </>
  );
}

import summaryStyles from "/sass/modules/_Summary.module.scss";

export default function Total(props) {
  let ticketPrice;

  {
    props.ticket === "General"
      ? (ticketPrice = props.amount * 799)
      : (ticketPrice = props.amount * 1299);
  }
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (prevValue, curValue) => prevValue + curValue.amount * curValue.price,
    initialValue
  );
  const totalPrice = ticketPrice + sumWithInitial;
  return (
    <div className={summaryStyles.total}>
      <p>Total:</p>
      <p className={summaryStyles.price}>{totalPrice} Dkk</p>
    </div>
  );
}

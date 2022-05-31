export default function Total(props) {
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce((prevValue, curValue) => prevValue + curValue.amount * curValue.price, initialValue);

// const totalWithTicket = sumWithInital + (props.amount * props.price);
  console.log(props);
  return (
    <div className="total">
      <p>Total:</p>
      <p>{sumWithInitial}Dkk</p>
    </div>
  );
}

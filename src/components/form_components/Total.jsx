export default function Total(props) {
  const initialValue = 0;
  const sumWithInital = props.basket.reduce((prevValue, curValue) => prevValue + curValue.amount * curValue.price, initialValue);
  console.log(props);
  return (
    <div className="total">
      <p>Total:</p>
      <p>{sumWithInital}Dkk</p>
    </div>
  );
}

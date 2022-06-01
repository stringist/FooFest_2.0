export default function BasketList(props) {
  /*   console.log(props);
   */

  const ticket = (
    <li>
      {props.amount}x {props.ticket}, {props.area}{" "}
      <span className="price">{799 * props.amount} Dkk</span>
    </li>
  );
  const basketItems = props.basket.map((item) =>
    item.amount > 0 ? (
      <li>
        {item.amount}x {item.product}{" "}
        <span className="price">{item.price * item.amount} Dkk</span>
      </li>
    ) : null
  );
  return (
    <>
      <ul>
        {ticket} {basketItems}
      </ul>
    </>
  );
}

import summaryStyles from "/sass/modules/_Form2.module.scss";
import createUID from "create-unique-id";
export default function BasketList(props) {
  const ticket = (
    <li>
      {props.amount}x {props.ticket}, {props.area}{" "}
      <span className="price">{799 * props.amount} Dkk</span>
    </li>
  );
  const basketItems = props.basket.map((item) =>
    item.amount > 0 ? (
      <li key={createUID(5)}>
        {item.amount}x {item.product}{" "}
        <span className="price">{item.price * item.amount} Dkk</span>
      </li>
    ) : null
  );
  return (
    <section className={summaryStyles.basketList}>
      <ul>
        {ticket} {basketItems}
      </ul>
    </section>
  );
}

import summaryStyles from "/sass/modules/_Form2.module.scss";
import createUID from "create-unique-id";
export default function BasketList(props) {

  const basketItems = props.basket.map((item) =>
    item.amount > 0 ? (
      <li key={createUID(5)}>
        {item.amount}x {item.product=== "General" || item.product=== "VIP" ? `${item.product},  ${item.area}` : item.product}{" "}
        <span className="price">{item.price * item.amount} Dkk</span>
      </li>
    ) : null
  );
  return (
    <section className={summaryStyles.basketList}>
      <ul>
       {basketItems}
      </ul>
    </section>
  );
}

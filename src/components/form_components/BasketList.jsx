import summaryStyles from "/sass/modules/_Form2.module.scss";
import createUID from "create-unique-id";
export default function BasketList(props) {
function removeItem(id) {
    props.setBasket((old) => old.filter((item) => item.id !== id));
  updateTotal();}
function updateTotal() {}
  const initialValue = 0;
  const sumWithInital = props.basket.reduce((prevValue, curValue) => prevValue + curValue.amount * curValue.price, initialValue);
  const basketItems = props.basket.map((item) =>
    item.amount > 0 ? (
      <li key={createUID(5)}>
        {item.amount}x{" "}
        {item.product === "General" || item.product === "VIP" ? `${item.product},  ${item.area}` : item.product}{" "}
        <span className="price">{item.price * item.amount} Dkk</span>
 {item.product !== "Booking Fee" ? <button onClick={() => removeItem(item.id)}>
               X
              </button> : null}
      </li>
    ) : null
  );
  return (
    <section className={summaryStyles.basketList}>
      <ul>{basketItems}</ul>
    </section>
  );
}

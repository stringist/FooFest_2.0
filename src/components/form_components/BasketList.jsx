import summaryStyles from "/sass/modules/_Form2.module.scss";
import createUID from "create-unique-id";
export default function BasketList(props) {
  function removeItem(id) {console.log(id);
    props.setBasket((old) => old.filter((item) => item.id !== id));
  }

  // const initialValue = 0;
  // const sumWithInital = props.basket.reduce((prevValue, curValue) => prevValue + curValue.amount * curValue.price, initialValue);
  const basketItems = props.basket.map((item) =>
    item.amount > 0 ? (
      <li key={createUID(5)}>
        {item.amount}x{" "}
        {item.product === "General" || item.product === "VIP" ? `${item.product},  ${item.area}` : item.product}{" "}
        <span>{item.price * item.amount} Dkk</span>
        {item.product !== "Booking Fee" && (item.product !== "General" && item.product !== "VIP")?  (
        /* {item.product !== "Booking Fee" ?  ( */
          <button title="Remove from basket" className="removeButton" onClick={() => removeItem(item.id)}>
            X
          </button>
        ) : null}
      </li>
    ) : null
  );
  return (
    <section>
      <ul>{basketItems}</ul>
    </section>
  );
}

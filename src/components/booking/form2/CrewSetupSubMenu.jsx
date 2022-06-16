import { useState, useRef } from "react";
import form2Styles from "/sass/modules/_Form2.module.scss";
import form1Styles from "/sass/modules/_Form1.module.scss";
import AmountButton from "../form1/AmountButton";
import TentAmountButton from "./TentAmountButton";

export default function CrewSetupSubMenu(props) {
  const [tentTotal, setTentTotal] = useState(0);
  // const twoPersonInput = useRef(0);
  // const threePersonInput = useRef(0);
 

const handleChange = (e) => {
console.log("handling Change", e);
    setTentTotal(
      props.twoPersCount * 2 + props.threePersCount * 3
    );
  };



  return (
    <div className={form2Styles.subMenu}>
      <div className={form2Styles.subMenuItem}>
        <div className="text_content">
          <label htmlFor="twoPersonTent">2 person tent </label>
        </div>
<TentAmountButton name="twoPersonTent"
          id="twoPersonTent" setTentCount={props.setTwoPersCount} tentCount={props.twoPersCount} basket={props.basket} setBasket={props.setBasket} onChange={handleChange} />
        {/* <input
          type="number"
          name="twoPersonTent"
          id="twoPersonTent"
          ref={twoPersonInput}
          min={0}
          onChange={handleChange}
        /> */}
        <p> +299Dkk</p>
      </div>
      <div className={form2Styles.subMenuItem}>
        <div className="text_content">
          <label htmlFor="threePersonTent">3 person tent </label>
        </div>
<TentAmountButton name="threePersonTent"
          id="threePersonTent" setTentCount={props.setThreePersCount} tentCount={props.threePersCount} basket={props.basket} setBasket={props.setBasket} onChange={handleChange} />

        {/* <input
          type="number"
          name="threePersonTent"
          id="threePersonTent"
          ref={threePersonInput}
          min={0}
          onChange={handleChange}
        /> */}
        <p> +399Dkk</p>
      </div>
      {tentTotal > 0 && tentTotal === props.amount ? (
        <p>The number of tents matches the number of tickets</p>
      ) : tentTotal > 0 && tentTotal !== props.amount ? (
        <p>The number of tents doesn't match the number of tickets</p>
      ) : null}
    </div>
  );
}

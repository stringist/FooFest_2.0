import { useState, useRef } from "react";
import form2Styles from "/sass/modules/_Form2.module.scss";
import form1Styles from "/sass/modules/_Form1.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";
import AmountButton from "../form1/AmountButton";
import TentAmountButton from "./TentAmountButton";

export default function CrewSetupSubMenu(props) {
  const tentTotal = props.twoPersCount * 2 + props.threePersCount * 3;
  // const twoPersonInput = useRef(0);
  // const threePersonInput = useRef(0);

  return (
    <div className={form2Styles.subMenu}>
      <div className={form2Styles.subMenuItem}>
        <div className="text_content">
          <label htmlFor="twoPersonTent">2-person tent </label>
        </div>
        <TentAmountButton
          name="twoPersonTent"
          id="twoPersonTent"
          setTentCount={props.setTwoPersCount}
          tentCount={props.twoPersCount}
          basket={props.basket}
          setBasket={props.setBasket}
        />
        {/* <input
          type="number"
          name="twoPersonTent"
          id="twoPersonTent"
          ref={twoPersonInput}
          min={0}
          onChange={handleChange}
        /> */}
        <p> +299 Dkk</p>
      </div>
      <div className={form2Styles.subMenuItem}>
        <div className="text_content">
          <label htmlFor="threePersonTent">3-person tent </label>
        </div>
        <TentAmountButton
          name="threePersonTent"
          id="threePersonTent"
          setTentCount={props.setThreePersCount}
          tentCount={props.threePersCount}
          basket={props.basket}
          setBasket={props.setBasket}
        />

        {/* <input
          type="number"
          name="threePersonTent"
          id="threePersonTent"
          ref={threePersonInput}
          min={0}
          onChange={handleChange}
        /> */}
        <p> +399 Dkk</p>
      </div>
      {tentTotal > 0 && tentTotal === props.amount ? (
        <div className={generalStyles.valid_text}>
          <p className={generalStyles.valid_text}>The number of tents matches the number of tickets</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </div>
      ) : tentTotal > 0 && tentTotal !== props.amount ? (
        <div className={generalStyles.error_text}>       <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-exclamation-triangle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <p className={generalStyles.error_text}>The number of tents doesn't match the number of tickets</p>
   
        </div>
      ) : null}
    </div>
  );
}

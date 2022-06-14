import { useState, useRef } from "react";
import form2Styles from "/sass/modules/_Form2.module.scss";
import form1Styles from "/sass/modules/_Form1.module.scss";
import AmountButton from "../form1/AmountButton";
import TentAmountButton from "./TentAmountButton";

export default function CrewSetupSubMenu(props) {
  const [tentTotal, setTentTotal] = useState(0);
  const twoPersonInput = useRef(0);
  const threePersonInput = useRef(0);
 

const handleChange = (e) => {
console.log("handling Change", e);
    setTentTotal(
      twoPersCount * 2 + threePersCount * 3
    );
  };

//   const handleChange = (e) => {
// console.log(`handling Change`, e);
//     setTentTotal(
//       twoPersonInput.current.value * 2 + threePersonInput.current.value * 3
//     );
//     updateBasket(e.target.name);
//   };

//   function updateBasket(productName) {console.log(productName);
//     const twoPers = {
//       product: "Two-person tent setup",
//       name: "twoPersonTent",
//       price: 299,
//       id: 667,
//     };
//     const threePers = {
//       product: "Three-person tent setup",
//       name: "threePersonTent",
//       price: 399,
//       id: 668,
//     };

//     if (props.basket.find((item) => item.name === productName)) {
// console.log(twoPersCount, threePersCount)
//       props.setBasket((old) =>
//         old.map((item) => {
//           if (item.name === productName) {
//             if (productName === "twoPersonTent") {
//               const copy = { ...twoPers };
//               copy.amount = twoPersCount;
//               return copy;
//             } else {
//               const copy = { ...threePers };
//               copy.amount = threePersCount;
//               return copy;
//             }
//           }
//           return item;
//         })
//       );
//     } else {
//       if (productName === "twoPersonTent") {
//         props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
//       } else {
//         props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
//       }
//     }
//   }

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

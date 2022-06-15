import form1Styles from "/sass/modules/_Form1.module.scss";
import { useState } from "react";

export default function TentAmountButton(props) {
  let newCount = 0;
  const twoPers = {
    product: "Two-person tent setup",
    name: "twoPersonTent",
    price: 299,
    id: 667,
    // amount: 0,
  };
  const threePers = {
    product: "Three-person tent setup",
    name: "threePersonTent",
    price: 399,
    id: 668,
    // amount: 0,
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    // e.target.name=== "twoPersonTent" ? props.setTentCount(old => tentCount):
  };

  const reduceAmount = (e) => {
    props.setTentCount((old) => old - 1);
  if (props.basket.find((item) => item.name === props.name)) {
      props.setBasket((old) =>
        old.map((item) => {
          if (item.name === props.name) {
            if (props.name === "twoPersonTent") {
              const copy = { ...item };
              copy.amount = copy.amount -1;
              return copy;
            }
//  else {
//               const copy = { ...threePers };
//               copy.amount = copy.amount - 1;
//               return copy;
//             }
          }
          return item;
        })
      );
    } else {
      console.log(`first time in de basket`);
      if (props.name === "twoPersonTent") {
        props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
      } 
// else {
//         props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
//       }
    };

    // newCount=props.tentCount;
    //     updateBasket(props.name);
  };

  const addAmount = (e) => {
    props.setTentCount((old) => old + 1);
 if (props.basket.find((item) => item.name === props.name)) {
      props.setBasket((old) =>
        old.map((item) => {
          if (item.name === props.name) {
            if (props.name === "twoPersonTent") {
              const copy = { ...item };
console.log(copy.amount, typeof copy.amount);
              copy.amount = copy.amount + 1;
              // copy.amount ++;
              return copy;
            } 
// else {
//               const copy = { ...threePers };
//               copy.amount = copy.amount + 1;
//               return copy;
//             }
          }
          return item;
        })
      );
    } 
else {
      console.log(`first time in de basket`);
      if (props.name === "twoPersonTent") {
        props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
      }
//  else {
//         props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
//       }
    };
    // newCount=props.tentCount;

    // updateBasket(props.name);
    //  props.setTentCount(old => {old + 1}, () => this. updateBasket(props.name));
  };

  // function updateBasket(productName) {
  //   console.log(props.tentCount);
  //   console.log(productName);
    // const twoPers = {
    //   product: "Two-person tent setup",
    //   name: "twoPersonTent",
    //   price: 299,
    //   id: 667,
    //   amount: 0,
    // };
    // const threePers = {
    //   product: "Three-person tent setup",
    //   name: "threePersonTent",
    //   price: 399,
    //   id: 668,
    //   amount: 0,
    // };

  //   if (props.basket.find((item) => item.name === productName)) {
  //     props.setBasket((old) =>
  //       old.map((item) => {
  //         if (item.name === productName) {
  //           if (productName === "twoPersonTent") {
  //             const copy = { ...twoPers };
  //             copy.amount = props.tentCount + 1;
  //             return copy;
  //           } else {
  //             const copy = { ...threePers };
  //             copy.amount = props.tentCount + 1;
  //             return copy;
  //           }
  //         }
  //         return item;
  //       })
  //     );
  //   } else {
  //     console.log(`first time in de basket`);
  //     if (productName === "twoPersonTent") {
  //       props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
  //     } else {
  //       props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
  //     }
  //   }
  // }

  return (
    <>
      <div className={form1Styles.form__amount__row}>
        <div onClick={props.tentCount > 0 ? reduceAmount : null}>-</div>
        <input
          type="text"
          id={props.name}
          name={props.name}
          value={props.tentCount}
          min="0"
          inputMode="numeric"
          // onChange={(e) => {
          //   props.setTentCount(Number(e.target.value));
          // }}
onChange={handleChange}
        />
        <div onClick={addAmount}>+</div>
      </div>
    </>
  );
}

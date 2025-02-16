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

  // const handleChange = (e) => {
  //   console.log(e.target.name + ` updating tents`);
   
  // };

  const reduceAmount = (e) => {
    props.setTentCount((old) => old - 1);
    if (props.basket.find((item) => item.name === props.name)) {
      props.setBasket((old) =>
        old.map((item) => {
          if (item.name === props.name) {
            const copy = { ...item };
            copy.amount = copy.amount - 1;
            return copy;
          }
          return item;
        })
      );
    } else {
      if (props.name === "twoPersonTent") {
        props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
      } else {
        props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
      }
    }
  };

  const addAmount = (e) => {
    props.setTentCount((old) => old + 1);
    if (props.basket.find((item) => item.name === props.name)) {
      props.setBasket((old) =>
        old.map((item) => {
          if (item.name === props.name) {
            const copy = { ...item };
            console.log(copy.amount, typeof copy.amount);
            copy.amount = copy.amount + 1;
            // copy.amount ++;
            return copy;
          }
          return item;
        })
      );
    } else {

      if (props.name === "twoPersonTent") {
        props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
      } else {
        props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
      }
    }
  };


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
          onChange={(e) => {
            props.setTentCount(Number(e.target.value));
          }}
         
        />
        <div onClick={addAmount}>+</div>
      </div>
    </>
  );
}

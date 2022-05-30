import { useState, useRef } from "react";
export default function CrewSetupSubMenu(props) {
  // const [twoPersonTent, setTwoPersonTents] = useState(0);
  // const [threePersonTent, setThreePersonTents] = useState(0);
  const [tentTotal, setTentTotal] = useState(0);
  const twoPersonInput = useRef(0);
  const threePersonInput = useRef(0);
  console.log(`number of tickets is`, props.amount);

  const handleChange = (e) => {
    console.log(props.basket);
    setTentTotal(twoPersonInput.current.value * 2 + threePersonInput.current.value * 3);
    updateBasket(e.target.name);
  };

  function updateBasket(productName) {
    console.log(productName);
    const twoPers = { name: "twoPersonTent", price: 299, id: 667 };
    const threePers = { name: "threePersonTent", price: 399, id: 668 };

    if (props.basket.find((item) => item.name === productName)) {
      console.log(`the item called ${productName} is already in the basket`);
      props.setBasket((old) =>
        old.map((item) => {
          if (item.name === productName) {
            if (productName === "twoPersonTent") {
              const copy = { ...twoPers };
              copy.amount = parseInt(twoPersonInput.current.value);
 return copy;
            } else {
              const copy = { ...threePers };
              copy.amount = parseInt(threePersonInput.current.value);
              return copy;
            }
          }
          return item;
        })
      );
    } else {
console.log(`first ${productName} added to basket`)
      if (productName === "twoPersonTent") {
        props.setBasket((old) => [...old, { ...twoPers, amount: 1 }]);
      } else {
        props.setBasket((old) => [...old, { ...threePers, amount: 1 }]);
      }
    }
  }

  return (
    <div className="subFormItem">
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="twoPersonTent">2 person tent</label>
          <p className="price">+299 DKK</p>
          <p className="subtext"></p>
        </div>
        <input
          type="number"
          name="twoPersonTent"
          id="twoPersonTent"
          ref={twoPersonInput}
          min={0}
          onChange={handleChange}
        />
      </div>
      <div className="tentSetupItem">
        <div className="text_content">
          <label htmlFor="threePersonTent">3 person tent</label>
          {/* <p className="price">+399 DKK</p> */}
          <p className="subtext"></p>
        </div>
        <input
          type="number"
          name="threePersonTent"
          id="threePersonTent"
          ref={threePersonInput}
          min={0}
          onChange={handleChange}
        />
      </div>
      {tentTotal > 0 && tentTotal === props.amount ? (
        <p>The number of tents matches the number of tickets</p>
      ) : tentTotal > 0 && tentTotal !== props.amount ? (
        <p>The number of tents doesn't match the number of tickets</p>
      ) : null}
    </div>
  );
}

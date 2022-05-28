import Cards from "react-credit-cards";
// import "react-credit-cards/lib/styles.scss";
import { useState, useRef } from "react";
export default function CCvalidation() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const formEl = useRef(null);

  function changeFocus(e) {
    const attr = parseInt(e.target.attributes.maxLength.value, 10);
    if (attr === undefined) {
    } else if (e.target.textLength === attr) {
      e.target.nextElementSibling.focus();
    }
  }
  function handleCardDisplay() {
    const rawText = [...number.split(" ").join("")]; // Remove old space
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i > 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });
    return creditCard.join(""); // Transform card array to string
  }
  function handleExpiryDate(e) {
    if (formEl.current === null) {
    } else {
      formEl.current.elements.expiry.value = formEl.current.elements.expiry.value
        .replace(
          /^([1-9]\/|[2-9])$/g,
          "0$1/" // 3 > 03/
        )
        .replace(
          /^(0[1-9]|1[0-2])$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^([0-1])([3-9])$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
          "$1/$2" // 141 > 01/41
        )
        .replace(
          /^([0]+)\/|[0]+$/g,
          "0" // 0/ > 0 and 00 > 0
        )
        .replace(
          /[^\d\/]|^[\/]*$/g,
          "" // To allow only digits and `/`
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 `/`
        );
    }
  }

  return (
    <>
      <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />

      <form ref={formEl} onChange={changeFocus}>
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="1" maxLength="45" />
        <input type="tel" name="number" placeholder="Card Number" value={handleCardDisplay()} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)} onInput={(e) => handleCardDisplay()} minLength="16" maxLength="19" />
        <input type="text" name="expiry" placeholder="MM/YY Expiry" value={handleExpiryDate()} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)} onInput={(e) => handleExpiryDate(e)} minLength="5" maxLength="5" />

        {number.substring(0, 2) == 34 || number.substring(0, 2) == 37 ? (
          <input type="tel" name="cvc" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="3" maxLength="4" />
        ) : (
          <input type="tel" name="cvc" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="3" maxLength="3" />
        )}
        <button onFocus={(e) => setFocus(e.target.name)}>Pay</button>
      </form>
    </>
  );
}

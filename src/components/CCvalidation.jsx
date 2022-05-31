/* import Cards from "react-credit-cards";
 */ // import "react-credit-cards/lib/styles.scss";
import { useState, useRef } from "react";
import generalStyles from "/sass/modules/_General.module.scss";
import Creditcard from "/sass/modules/_Creditcard.module.scss";
import step4 from "../../public/img/step4.svg";

export default function CCvalidation(props) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const formEl = useRef(null);
  const ENDPOINT = "https://kea2semester-e216.restdb.io/rest/foofest";
  const KEY = "615d83068597142da1745455";
  function changeFocus(e) {
    const attr = parseInt(e.target.attributes.maxLength.value, 10);
    // if attrb === undefined - because the input for Name doesnt carry a maxlength
    if (attr === undefined) {
    } else if (e.target.textLength === attr) {
      e.target.nextElementSibling.focus();
      if (e.target.nextElementSibling.nodeName === "SECTION") {
        e.target.nextElementSibling.firstChild.focus();
        // the if statement underneath here is because expiry + cvc was put into a section
      }
    } else if (e.target.nextElementSibling === null) {
      console.log("fack");
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
      formEl.current.elements.expiry.value =
        formEl.current.elements.expiry.value
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
  function changePage(e) {
    e.preventDefault();
    console.log(props.ticketholderdata);
    props.setShowContent(0);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const postData = JSON.stringify(props.ticketholderdata);
    fetch(ENDPOINT, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-apikey": KEY,
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <img src={step4} alt="" />
      <h4 className={Creditcard.cc_h4}>CARD INFORMATION</h4>
      {/*   <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      ></Cards> */}

      <form
        ref={formEl}
        onChange={changeFocus}
        onSubmit={handleSubmit}
        className={Creditcard.cc_form}
      >
        <article>
          {" "}
          <span>Name</span>
          <input
            type="text"
            name="name"
            /*           value={name}
             */ onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            minLength="1"
            maxLength="45"
            required
          />
        </article>
        <article>
          {" "}
          <span>Card Number</span>
          <input
            type="tel"
            name="number"
            value={handleCardDisplay()}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            onInput={(e) => handleCardDisplay()}
            minLength="16"
            maxLength="19"
            required
          />
        </article>

        <section className={Creditcard.section_cc}>
          <span>Expiry</span>
          <input
            type="text"
            value={handleExpiryDate()}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            onInput={(e) => handleExpiryDate(e)}
            minLength="5"
            maxLength="5"
            required
          />
          <span>CVC</span>
          {number.substring(0, 2) == 34 || number.substring(0, 2) == 37 ? (
            <input
              type="tel"
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              minLength="3"
              maxLength="4"
              required
            />
          ) : (
            <input
              type="tel"
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              minLength="3"
              maxLength="3"
              required
            />
          )}
        </section>
        <section className={generalStyles.next_back_buttons}>
          <button onClick={changePage}>Back</button>
          <button
            onSubmit={(e) => handleSubmit()}
            onFocus={(e) => setFocus(e.target.name)}
          >
            Complete purchase
          </button>
        </section>
      </form>
    </>
  );
}

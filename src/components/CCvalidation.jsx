import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
import { useState, useRef } from "react";
import generalStyles from "/sass/modules/_General.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import billing from "/sass/modules/_Billing.module.scss";

import Creditcard from "/sass/modules/_Creditcard.module.scss";
import step4 from "/img/step4.svg";
import Summary from "./form_components/Summary";

export default function CCvalidation({ ...props }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const formEl = useRef(null);
  const ENDPOINT = "https://kea2semester-e216.restdb.io/rest/foofest";
  const ENDPOINT2 = "https://foofestival.herokuapp.com/fullfill-reservation";
  const KEY = "615d83068597142da1745455";
  const reservation = { id: props.reservation.id };

  function changeFocus(e) {
    /*     const attr = parseInt(e.target.attributes.maxLength.value, 10);
     */
    // if attrb === undefined - because the input for Name doesnt carry a maxlength
    /*  if (attr === undefined) {
    } else if (e.target.textLength === attr) {
      if (e.target.nextElementSibling === null) {
        if (
          e.target.parentElement.nextElementSibling.firstElementChild
            .firstElementChild.nextElementSibling === null
        ) {
          console.log("im null");
        } 
      }
    }*/
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
    /*     console.log(formEl.current.elements.expiry.value);
     */ if (formEl.current === null) {
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
  function changePage(e) {
    e.preventDefault();
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
    props.setStep((old) => old + 1);
    props.setTimer(1);
  }
  function handlePost() {
    const postData = JSON.stringify(reservation);

    fetch(ENDPOINT2, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        /*           "x-apikey": KEY,
         */
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <img src="/img/step5.svg" alt="step5 breadcrumbs" className={form2Styles.breadcrumbs} />

      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          {/* <img src={step4} alt="" /> */}
          <h2>Card Information</h2>

          <form ref={formEl} onChange={changeFocus} onSubmit={handleSubmit} className={billing.billing_form}>
            {<Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus}></Cards>}
            <fieldset>
              <div className={billing.inputLabelPair}>
                <label htmlFor="name">Name</label>
                <input placeholder=" " type="text" id="name" name="name" pattern="^[a-zA-ZÆØÅæøå'- ]*$" value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="1" maxLength="45" required />
                <span className={billing.requirements}> Must only contain letters</span>
              </div>
              <div className={billing.inputLabelPair}>
                <label id="number">Card Number</label>
                <input
                  placeholder=" "
                  type="tel"
                  pattern="[0-9 ]+"
                  id="number"
                  name="number"
                  value={handleCardDisplay()}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  onInput={(e) => handleCardDisplay()}
                  minLength="16"
                  maxLength="19"
                  required
                />
                <span className={billing.requirements}> Must only contain numbers</span>
              </div>
              <div className={billing.twoColumn}>
                <div className={billing.inputLabelPair}>
                  <label htmlFor="expiry">Expiry Date</label>
                  <input
                    placeholder=" "
                    name="expiry"
                    id="expiry"
                    type="tel"
                    pattern="[0-9/ ]+"
                    value={handleExpiryDate()}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    onInput={(e) => handleExpiryDate(e)}
                    minLength="5"
                    maxLength="5"
                    required
                  />
                </div>

                <div className={billing.inputLabelPair}>
                  <label htmlFor="cvc">CVC</label>
                  {number.substring(0, 2) == 34 || number.substring(0, 2) == 37 ? (
                    <input placeholder=" " type="tel" pattern="[0-9 ]+" name="cvc" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="3" maxLength="4" required />
                  ) : (
                    <input placeholder=" " type="tel" name="cvc" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)} minLength="3" maxLength="3" required />
                  )}
                </div>
              </div>
              <div className={generalStyles.buttonWrapper}>
                <button
                  className={generalStyles.secondaryButton}
                  onClick={() => {
                    props.setStep((old) => old - 1);
                  }}
                >
                  Back
                </button>
                <button className={generalStyles.primaryButton} onClick={(e) => handlePost()} onFocus={(e) => setFocus(e.target.name)}>
                  Complete purchase
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <Summary {...props} />
      </div>
    </>
  );
}

import { useState, useRef } from "react";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";
import thankyouStyles from "/sass/modules/_Thankyou.module.scss";

import { BsCheck2Circle } from "react-icons/bs";

export default function Thankyou(props) {
  return (
    <>
      <div className={thankyouStyles.thankyou}>
        <section className={form2Styles.checkout_options}>
          <h2>Thank you for your purchase!</h2>
          <BsCheck2Circle />
          <p>We sent your ticket to your email</p>
        </section>
      </div>
    </>
  );
}

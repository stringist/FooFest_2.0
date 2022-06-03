import { useState, useRef } from "react";

import form2Styles from "/sass/modules/_Form2.module.scss";

import thankyouStyles from "/sass/modules/_Thankyou.module.scss";

export default function Thankyou(props) {
  props.setTimer(0);
  return (
    <>
      <img src="/img/step6.svg" alt="step6 breadcrumbs" className={form2Styles.breadcrumbs} />
      <div className={thankyouStyles.thankyou}>
        <h2>Thank you for your purchase!</h2>

        <p>We sent your ticket to your email</p>
      </div>
    </>
  );
}

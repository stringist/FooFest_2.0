import { useRef, useState } from "react";
import CampingOptions from "./CampingOptions";
import Summary from "../../form_components/Summary";
import form2Styles from "/sass/modules/_Form2.module.scss";
import BillingInfo from "../../BillingInfo";
export default function FormStep2(props) {
  return (
    <>
      <section className={form2Styles.checkout_grid}>
        <CampingOptions {...props} />
        <Summary {...props} />
      </section>
    </>
  );
}

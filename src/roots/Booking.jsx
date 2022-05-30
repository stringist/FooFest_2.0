import { useState } from "react";
import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import BillingInfo from "../components/BillingInfo";
import generalStyles from "/sass/modules/_General.module.scss";

export default function Booking() {
  const [ticketholderdata, setTicketholderdata] = useState({});
  const [showcontent, setShowContent] = useState(0);
  return (
    <>
      {/*      <FormStep1></FormStep1>
       */}
      {showcontent === 0 ? (
        <section className={generalStyles.sections_forms}>
          <BillingInfo
            setShowContent={setShowContent}
            setTicketholderdata={setTicketholderdata}
            ticketholderdata={ticketholderdata}
          />
        </section>
      ) : (
        <section className={generalStyles.sections_forms}>
          <CCvalidation
            setShowContent={setShowContent}
            ticketholderdata={ticketholderdata}
          />
        </section>
      )}
    </>
  );
}

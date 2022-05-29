import { useState } from "react";
import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import BillingInfo from "../components/BillingInfo";

export default function Booking() {
  const [ticketholderdata, setTicketholderdata] = useState({});
  const [showcontent, setShowContent] = useState(0);
  return (
    <>
      {/*      <FormStep1></FormStep1>
       */}
      {showcontent === 0 ? (
        <BillingInfo
          setShowContent={setShowContent}
          setTicketholderdata={setTicketholderdata}
        />
      ) : (
        <CCvalidation
          setShowContent={setShowContent}
          ticketholderdata={ticketholderdata}
        />
      )}
    </>
  );
}

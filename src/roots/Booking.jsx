import { useState } from "react";

import form1Styles from "/sass/modules/forms/_Form1.module.scss";

import FormStep1 from "../components/booking/form1/FormStep1";
import CCvalidation from "../components/booking/CCvalidation";
import BillingInfo from "../components/booking/BillingInfo";
import generalStyles from "/sass/modules/_General.module.scss";

import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";
import MyLoader from "../components/general/MyLoader";

import FormStep2 from "../components/booking/form2/FormStep2";
import Summary from "../components/booking/form_components/Summary";

export default function Booking(props) {
  const [isSearching, setIsSearching] = useState(false);
  const [ticketholderdata, setTicketholderdata] = useState({});
  const [showcontent, setShowContent] = useState(0);
  const [reservationId, setReservationId] = useState("");

  return (
    <>
      {isSearching && <MyLoader message="Searching tickets..." />}
      <div className={form1Styles.Booking}>
        <Menu user={props.user} />
        <HeroBanner img="/img/bands_background.png" title="Tickets" />
        <FormStep1 setReservationId={setReservationId} setIsSearching={setIsSearching} />

        {showcontent === 0 ? (
          <section className={generalStyles.sections_forms}>
            <BillingInfo setShowContent={setShowContent} setTicketholderdata={setTicketholderdata} ticketholderdata={ticketholderdata} />
          </section>
        ) : (
          <section className={generalStyles.sections_forms}>
            <CCvalidation reservationId={reservationId} setShowContent={setShowContent} ticketholderdata={ticketholderdata} />
          </section>
        )}
        <Footer />
      </div>
    </>
  );
}

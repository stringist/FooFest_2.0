import form1Styles from "/sass/modules/_Form1.module.scss";

import FormStep1 from "../components/booking/form1/FormStep1";
import CCvalidation from "../components/CCvalidation";
import CheckOutForm from "../components/CheckOutForm";

import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";

export default function Booking(props) {
  return (
    <div className={form1Styles.Booking}>
      <Menu user={props.user} />
      <HeroBanner img="/img/bands_background.png" title="Tickets" />
      <FormStep1></FormStep1>
      <CheckOutForm></CheckOutForm>
      <CCvalidation></CCvalidation>

      <Footer />
    </div>
  );
}

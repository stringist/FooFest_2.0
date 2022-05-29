import form1Styles from "/sass/modules/_Form1.module.scss";

import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import CheckOutForm from "../components/CheckOutForm";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

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

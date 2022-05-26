import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import CheckOutForm from "../components/CheckOutForm";

import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Booking() {
  return (
    <>
      <Menu />

      <FormStep1></FormStep1>
      <CheckOutForm></CheckOutForm>
      <CCvalidation></CCvalidation>

      <Footer />
    </>
  );
}

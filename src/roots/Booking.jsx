import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import CheckOutForm from "../components/CheckOutForm";

export default function Booking() {
  return (
    <>
    <FormStep1></FormStep1>
      <CheckOutForm></CheckOutForm>
      <CCvalidation></CCvalidation>

    </>
  );
}

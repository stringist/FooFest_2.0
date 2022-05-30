import FormStep1 from "../components/FormStep1";
import CCvalidation from "../components/CCvalidation";
import CheckOutForm from "../components/CheckOutForm";
import FormStep2 from "../components/FormStep2";

export default function Booking() {
  return (
    <>
      <FormStep1 />
      {/* <FormStep2 /> */}
      <CheckOutForm />
      <CCvalidation />
    </>
  );
}

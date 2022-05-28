import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import form1Styles from "/sass/modules/_Form1.module.scss";

import AreaButton from "./AreaButton";
import TicketButton from "./TicketButton";
import AmountButton from "./AmountButton";
import Alert from "./Alert";

export default function FormStep1() {
  const formEl = useRef(null);

  const [ticket, setTicket] = useState("General");
  const [area, setArea] = useState("Svartheim");
  const [amount, setAmount] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [reservation, setReservation] = useState([]);
  const [showAlert, setAlert] = useState(false);

  function searchTickets(e) {
    e.preventDefault();
    setIsSearching(true);

    const ticketRequest = { area, amount };
    const putData = JSON.stringify(ticketRequest);

    console.log(ticketRequest);
    console.log(putData);

    fetch("https://foofestival.herokuapp.com/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: putData,
    })
      .then((response) => {
        response.json().then((data) => {
          setReservation(data);
          data.error ? setAlert(true) : setAlert(false);
        });

        setIsSearching(false);
        console.log(showAlert);
      })
      .catch((err) => console.error(err));
  }
  console.log(reservation);

  const validate = Yup.object({
    type: Yup.string().required("Choose a type of ticket"),
    area: Yup.string().required("Choose one area"),
    amount: Yup.number().positive().integer().required("Amount must be greater than 0"),
  });

  return (
    <Formik
      initialValues={{
        type: "",
        area: "",
        amount: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        props.setUser(values.username);
        props.setIsLogedIn(true);
      }}
    >
      {({ values }) => (
        <Form>
          <legend id="my-radio-group">Choose ticket</legend>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="ticket" value="general" />
              One
            </label>
            <label>
              <Field type="radio" name="ticket" value="vip" />
              Two
            </label>
            <div>Picked: {values.ticket}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

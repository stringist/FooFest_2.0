import { useRef, useState } from "react";
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
  // console.log(reservation);

  return (
    <>
      <form ref={formEl} onSubmit={searchTickets}>
        <fieldset>
          <legend className={form1Styles.ticket_legend}>Select ticket</legend>
          <div className={form1Styles.form__type}>
            <TicketButton name="General" price="799kr" ticket={ticket} setTicket={setTicket} />
            <TicketButton name="VIP" price="1299kr" ticket={ticket} setTicket={setTicket} />
          </div>
        </fieldset>

        <fieldset className={form1Styles.form__amount}>
          <legend>Choose amount</legend>
          <p>The amount must be a number greater than 0</p>
          <AmountButton name="amount" amount={amount} setAmount={setAmount} />
        </fieldset>

        <fieldset>
          <legend>Choose area</legend>
          <div className={form1Styles.form__area}>
            <div className={form1Styles.form__area__row}>
              <AreaButton name="Svartheim" area={area} setArea={setArea} />
              <AreaButton name="Nilfheim" area={area} setArea={setArea} />
              <AreaButton name="Helheim" area={area} setArea={setArea} />
            </div>
            <div className={form1Styles.form__area__row}>
              <AreaButton name="Muspeleheim" area={area} setArea={setArea} />
              <AreaButton name="Alfheim" area={area} setArea={setArea} />
            </div>
          </div>
        </fieldset>

        {!isSearching && <button>Search tickets</button>}
        {isSearching && <button>Searching tickets...</button>}
      </form>

      {showAlert && <Alert message={reservation.error} setAlert={setAlert} />}
      {/* {showAlert === true ? <Alert message={reservation.error} setAlert={setAlert} /> : <FormStep2/>} */}
    </>
  );
}

import { useRef, useState } from "react";

import form1Styles from "/sass/modules/_Form1.module.scss";

import AreaButton from "./AreaButton";
import TicketButton from "./TicketButton";
import AmountButton from "./AmountButton";
import Alert from "./Alert";
import MyLoader from "../../general/MyLoader";
import Timer from "../Timer";

export default function FormStep1() {
  const formEl = useRef(null);

  const [timer, setTimer] = useState("");
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

        console.log(showAlert);
        const timing = setTimeout(() => {
          setIsSearching(false);
          setTimer("1");
        }, 2000);
        return () => {
          clearTimeout(timing);
        };
      })
      .catch((err) => console.error(err));
  }
  // console.log(reservation);

  return (
    <>
      {isSearching && <MyLoader message="Searching tickets..." />}
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
          {/* <p>Choose a number greater than 0</p> */}
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
      {console.log(timer)}
      {timer && <Timer />}
    </>
  );
}

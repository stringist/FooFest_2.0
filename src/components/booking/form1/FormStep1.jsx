import { useRef, useState } from "react";

import form1Styles from "/sass/modules/_Form1.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import AreaButton from "./AreaButton";
import TicketButton from "./TicketButton";
import AmountButton from "./AmountButton";
import Alert from "./Alert";
import Timer from "../Timer";
import TimeUp from "../TimeUp";
import FormStep2 from "../form2/FormStep2";

export default function FormStep1(props) {
  const formEl = useRef(null);

  const [timer, setTimer] = useState(0);
  const [ticket, setTicket] = useState("General");
  const [area, setArea] = useState("Svartheim");
  const [amount, setAmount] = useState(1);
  // const currentTicket = {product: `ticket`, type: ticket, area: area, amount: amount};

  const [reservation, setReservation] = useState([]);
  const [showAlert, setAlert] = useState(false);
  const [basket, setBasket] = useState([
    { product: "Booking Fee", price: 99, id: 1, amount: 1 },
  ]);

  function searchTickets(e) {
    e.preventDefault();
    props.setIsSearching(true);

    const ticketRequest = { area, amount };
    const putData = JSON.stringify(ticketRequest);

    /*  console.log(ticketRequest);
    console.log(putData); */

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

        /*         console.log(showAlert);
         */
        const timing = setTimeout(() => {
          props.setIsSearching(false);
          showAlert ? setTimer(0) : setTimer(1);
        }, 2000);
        return () => {
          clearTimeout(timing);
        };
      })
      .catch((err) => console.error(err));
    applyReservationId();
  }
  function applyReservationId() {
    props.setReservationId(reservation.id);
  }
  return (
    <>
      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Select ticket</h2>
          <form
            className={form1Styles.step1Form}
            ref={formEl}
            onSubmit={searchTickets}
          >
            <fieldset>
              {/* <legend className={form1Styles.ticket_legend}>Ticket Type:</legend> */}
              <label>Ticket Type:</label>
              <div className={form1Styles.form__type}>
                <TicketButton
                  name="General"
                  price="799kr"
                  ticket={ticket}
                  setTicket={setTicket}
                />
                <TicketButton
                  name="VIP"
                  price="1299kr"
                  ticket={ticket}
                  setTicket={setTicket}
                />
              </div>
            </fieldset>

            <fieldset className={form1Styles.form__amount}>
              <label>Choose amount:</label>
              {/* <p>Choose a number greater than 0</p> */}
              <AmountButton
                id="amount"
                name="amount"
                amount={amount}
                setAmount={setAmount}
              />
            </fieldset>

            <fieldset>
              {/* <legend>Choose area</legend> */}
              <label>Choose area:</label>
              <div className={form1Styles.form__area}>
                <div className={form1Styles.form__area__row}>
                  <AreaButton name="Svartheim" area={area} setArea={setArea} />
                  <AreaButton name="Nilfheim" area={area} setArea={setArea} />
                  <AreaButton name="Helheim" area={area} setArea={setArea} />
                </div>
                <div className={form1Styles.form__area__row}>
                  <AreaButton
                    name="Muspeleheim"
                    area={area}
                    setArea={setArea}
                  />
                  <AreaButton name="Alfheim" area={area} setArea={setArea} />
                </div>
              </div>
            </fieldset>

            {!props.isSearching && (
              <button className={generalStyles.primaryButton}>
                Find tickets
              </button>
            )}
            {props.isSearching && (
              <button className={generalStyles.primaryButton}>
                Searching tickets...
              </button>
            )}
          </form>
        </section>
      </div>
      {/*       {console.log(timer)}
       */}{" "}
      {timer === 1 && <Timer setTimer={setTimer} />}
      {timer === -1 && <TimeUp />}
      {showAlert === true ? (
        <Alert message={reservation.error} setAlert={setAlert} />
      ) : (
        <FormStep2
          ticket={ticket}
          area={area}
          amount={amount}
          setBasket={setBasket}
          basket={basket}
        />
      )}
    </>
  );
}

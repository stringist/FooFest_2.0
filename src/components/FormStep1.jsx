import { useRef, useState } from "react";
import AreaButton from "./AreaButton";
import TicketButton from "./TicketButton";
import AmountButton from "./AmountButton";

export default function FormStep1() {
  const formEl = useRef(null);

  const [ticket, setTicket] = useState("General");
  const [area, setArea] = useState("Svartheim");
  const [amount, setAmount] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [reservation, setReservation] = useState([]);

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
          // console.log(data);
          setReservation(data);
        });
        setIsSearching(false);
      })
      .catch((err) => console.error(err));
  }
  console.log(reservation);

  if (reservation.error === "Invalid area, expired id or not enough available spots") {
    return alert("no available spots, try another area");
  } else if (reservation.message === "Reserved") {
    return alert("tickets resered");
  }

  return (
    <form ref={formEl} onSubmit={searchTickets}>
      <fieldset>
        <legend>Choose ticket</legend>
        <TicketButton name="General" price="799kr" ticket={ticket} setTicket={setTicket} />
        <TicketButton name="VIP" price="1299kr" ticket={ticket} setTicket={setTicket} />
      </fieldset>

      <fieldset>
        <legend>Choose area</legend>
        <div className="form__area">
          <div className="form__area--row">
            <AreaButton name="Svartheim" area={area} setArea={setArea} />
            <AreaButton name="Nilfheim" area={area} setArea={setArea} />
            <AreaButton name="Helheim" area={area} setArea={setArea} />
          </div>
          <div className="form__area--row">
            <AreaButton name="Muspeleheim" area={area} setArea={setArea} />
            <AreaButton name="Alfheim" area={area} setArea={setArea} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Choose amount</legend>
        <AmountButton name="amount" amount={amount} setAmount={setAmount} />
      </fieldset>

      {!isSearching && <button>Search tickets</button>}
      {isSearching && <button>Searching tickets...</button>}
    </form>
  );
}

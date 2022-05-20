import { useRef, useState } from "react";
import RadioButton from "./RadioButton";

export default function FormStep1() {
  const formEl = useRef(null);

  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  // const [ticketRequest, setTicketRequest] = useState({ area: "", amount: 0 });

  function searchTickets(e) {
    e.preventDefault();
    const ticketRequest = { area, amount };

    console.log(ticketRequest);
    checkAvailability(ticketRequest);
    setIsSearching(true);
  }

  function checkAvailability(ticketRequest) {
    const putData = JSON.stringify(ticketRequest);
    console.log(putData);

    fetch("https://foofestival.herokuapp.com/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: putData,
    })
      .then((response) => {
        console.log(response);
        setIsSearching(false);
      })
      .catch((err) => console.error(err));
  }
  return (
    <form ref={formEl} onSubmit={searchTickets}>
      <fieldset>
        <legend>Choose ticket</legend>

        <input type="radio" id="generalTicket" name="ticketChoice" value="general" />
        <label htmlFor="generalTicket">General 799kr</label>
        <input type="radio" id="vipTicket" name="ticketChoice" value="vip" />
        <label htmlFor="vipTicket">Vip 1299kr</label>
      </fieldset>

      <fieldset>
        <legend>Choose area</legend>
        <RadioButton name="Svartheim" area={area} setArea={setArea}></RadioButton>
        <RadioButton name="Nilfheim" area={area} setArea={setArea}></RadioButton>
        <RadioButton name="Helheim" area={area} setArea={setArea}></RadioButton>
        <RadioButton name="Muspeleheim" area={area} setArea={setArea}></RadioButton>
        <RadioButton name="Alfheim" area={area} setArea={setArea}></RadioButton>
      </fieldset>

      <fieldset>
        <legend>Choose amount</legend>
        <label htmlFor="amount"></label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          inputMode="numeric"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
      </fieldset>

      {!isSearching && <button>Search tickets</button>}
      {isSearching && <button>Searching tickets...</button>}
    </form>
  );
}

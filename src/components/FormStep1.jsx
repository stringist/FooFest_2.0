import { useRef, useState } from "react";

export default function FormStep1() {
  const formEl = useRef(null);

  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  // const [ticketRequest, setTicketRequest] = useState({ area: "", amount: 0 });

  function searchTickets(e) {
    e.preventDefault();

    setArea(formEl.current.elements.areaChoice.value);
    setAmount(Number(formEl.current.elements.amount.value));

    console.log(area, amount);
    // const ticketRequest = {
    //   area: formEl.current.elements.areaChoice.value,
    //   amount: Number(formEl.current.elements.amount.value),
    // };
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
        <input type="radio" id="svartheim" name="areaChoice" value="Svartheim" />
        <label htmlFor="svartheim">Svartheim</label>
        <input type="radio" id="nilfheim" name="areaChoice" value="Nilfheim" />
        <label htmlFor="nilfheim">Nilfheim</label>
        <input type="radio" id="helheim" name="areaChoice" value="Helheim" />
        <label htmlFor="helheim">Helheim</label>
        <input type="radio" id="muspeleheim" name="areaChoice" value="muspeleheim" />
        <label htmlFor="muspeleheim">Muspeleheim</label>
        <input type="radio" id="alfheim" name="areaChoice" value="Alfheim" />
        <label htmlFor="alfheim">Alfheim</label>
      </fieldset>

      <fieldset>
        <legend>Choose amount</legend>
        <label htmlFor="amount"></label>
        <input type="number" id="amount" name="amount" min="1" inputMode="numeric" />
      </fieldset>

      {!isSearching && <button>Search tickets</button>}
      {isSearching && <button>Searching tickets...</button>}
    </form>
  );
}

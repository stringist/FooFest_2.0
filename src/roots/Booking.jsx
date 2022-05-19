export default function Booking() {
  return (
    <form action="[URL]" method="GET">
      <fieldset>
        <legend>Choose ticket</legend>

        <input type="radio" id="generalTicket" name="ticketChoice" value="general" />
        <label htmlFor="generalTicket">General 799kr</label>
        <input type="radio" id="vipTicket" name="ticketChoice" value="vip" />
        <label htmlFor="vipTicket">Vip 1299kr</label>
      </fieldset>

      <fieldset>
        <legend>Choose area</legend>
        <input type="radio" id="svartheim" name="areaChoice" value="svartheim" />
        <label htmlFor="svartheim">Svartheim</label>
        <input type="radio" id="nilfheim" name="areaChoice" value="nilfheim" />
        <label htmlFor="nilfheim">Nilfheim</label>
        <input type="radio" id="helheim" name="areaChoice" value="helheim" />
        <label htmlFor="helheim">Helheim</label>
        <input type="radio" id="muspeleheim" name="areaChoice" value="muspeleheim" />
        <label htmlFor="muspeleheim">Muspeleheim</label>
        <input type="radio" id="alfheim" name="areaChoice" value="alfheim" />
        <label htmlFor="alfheim">Alfheim</label>
      </fieldset>

      <fieldset>
        <legend>Choose amount</legend>
        <label htmlFor="amount"></label>
        <input type="number" id="amount" name="amount" min="1" inputMode="numeric" />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}

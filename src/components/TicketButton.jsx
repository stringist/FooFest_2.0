export default function TicketButton(props) {
  return (
    <>
      <input
        type="radio"
        checked={props.ticket === props.name}
        id={props.name}
        name="ticketChoice"
        value={props.name}
        onChange={(e) => {
          props.setTicket(e.target.value);
        }}
      />
      <label htmlFor={props.name}>
        {props.name} {props.price}
      </label>
    </>
  );
}

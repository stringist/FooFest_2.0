import form1Styles from "/sass/modules/_Form1.module.scss";

export default function TicketButton(props) {
  return (
    <div className={`${form1Styles.form__type__row}`}>
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
      <label htmlFor={props.name} className={`${props.ticket === props.name ? form1Styles.checked : ""}`}>
        {props.name} <br></br>
        {props.price}
      </label>
    </div>
  );
}

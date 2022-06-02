export default function TicketHolderForm(props) {
  const amount = 2;
  const holderForm = [...Array(amount)].map((e, i) => {
    if (i < amount) {
      return (
        <fieldset>
          <legend>Ticketholder number {i + 1}</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            pattern="^[a-zA-ZÆØÅæøå'- ]*$"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
          />
        </fieldset>
      );
      console.log(i);
    }
  });
  return (
    <>
      <h2>TICKET HOLDERS INFORMATION</h2>
      <a href="#/">← Back</a>
      {holderForm}
    </>
  );
}

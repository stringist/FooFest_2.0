import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function TicketHolderForm(props) {
  const amount = 2;
  const holderForm = [...Array(amount)].map((e, i) => {
    if (i < amount) {
      return (
        <fieldset className={billing.ticketholderCard}>
          <legend>Ticketholder {i + 1}</legend>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder=" " pattern="^[a-zA-ZÆØÅæøå'- ]*$" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder=" " required />
        </fieldset>
      );
      console.log(i);
    }
  });
  return (
    <>
      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a href="#/">← Back</a>
<form className={billing.billing_form}>
          {holderForm}
<fieldset>
 <div className={generalStyles.buttonWrapper}>
              <button className={generalStyles.secondaryButton}>Back</button>
              <button className={generalStyles.primaryButton}>Next</button>
            </div></fieldset>
</form>
        </section>
      </div>
    </>
  );
}

import form2Styles from "/sass/modules/_Form2.module.scss";

export default function FixedFee() {
  return (
    <div className={form2Styles.formItem}>
      <input
        type="radio"
        id="fixed_fee"
        name="fixed_fee"
        checked={true}
        readOnly={true}
      />
      <div className="text_content">
        <label htmlFor="fixed_fee">Fixed Booking Fee</label>
        <p className={form2Styles.subtext}>Paid only once per purchase</p>
      </div>
      <p className={form2Styles.price}>+99 DKK</p>
    </div>
  );
}

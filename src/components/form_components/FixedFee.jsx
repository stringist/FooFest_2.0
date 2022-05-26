export default function FixedFee() {

return(
<div className="formItem">
      <input type="radio" id="fixed_fee" name="fixed_fee" checked={true} />
      <div className="text_content">
        <label htmlFor="fixed_fee">Fixed Booking Fee</label>
        <p className="subtext">Paid only once per purchase</p>
      </div>
      <p className="price">+99 DKK</p>
    </div>
);
}
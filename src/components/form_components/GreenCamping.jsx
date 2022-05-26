export default function GreenCamping() {
  return (
    <div className="formItem">
      <input type="checkbox" id="greenCamping" name="greenCamping" />
      <div className="text_content">
        <label htmlFor="greenCamping">Green camping </label>
        <p className="subtext">
          Includes re-usable dishes, eco-friendly toiletries, and solar power rather than burning whale oil
        </p>
      </div>
      <p className="price">+249 DKK</p>
    </div>
  );
}

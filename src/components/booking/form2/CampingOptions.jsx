import FixedFee from "./FixedFee";
import GreenCamping from "./GreenCamping";
import CrewSetup from "./CrewSetup";
import form2Styles from "/sass/modules/_Form2.module.scss";

export default function CampingOptions(props) {
  return (
    <section className={form2Styles.camping_options}>
      <h2>Select Camping Options</h2>
      <a href="#/">← Back</a>
      <form>
        <FixedFee />
        <GreenCamping  {...props}/>
        <CrewSetup  {...props}/>
<div className="form2Styles buttonwrapper">
        <button className="secondary">Back</button>
        <button className="primary">Continue to payment</button></div>
      </form>
    </section>
  );
}



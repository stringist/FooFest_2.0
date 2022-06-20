import FixedFee from "./FixedFee";
import GreenCamping from "./GreenCamping";
import CrewSetup from "./CrewSetup";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function CampingOptions(props) {
  return (
    <section className={form2Styles.checkout_options}>
      <h2>Select Camping Options</h2>
      <a
        href="#/"
        onClick={() => {
          props.setStep((old) => old - 1);
        }}
      >
        ← Back
      </a>
      <form>
        <FixedFee />
        <GreenCamping {...props} />
        <CrewSetup {...props} />
        <div className={generalStyles.buttonWrapper}>
          <button
            className={generalStyles.secondaryButton}
            onClick={() => {
              props.setStep((old) => old - 1);
            }}
          >
            Back
          </button>
          {props.basket.some(item => item.product === "General") || props.basket.some(item => item.product === "VIP")? (
            <button
              className={generalStyles.primaryButton}
              onClick={() => {
                props.setStep((old) => old + 1);
              }}
            >
              Continue to payment
            </button>
          ) :<button className={generalStyles.disabledButton}>Continue to payment</button>}
        </div>
      </form>
    </section>
  );
}

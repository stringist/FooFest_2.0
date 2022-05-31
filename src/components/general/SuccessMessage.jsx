import { AiFillCheckCircle } from "react-icons/ai";

import generalStyles from "/sass/modules/_General.module.scss";

export default function SuccessMessage(props) {
  return (
    <div className={`${generalStyles.alert} ${generalStyles.alert_success}`} role="alert">
      <AiFillCheckCircle />
      <p> {props.message}</p>
    </div>
  );
}

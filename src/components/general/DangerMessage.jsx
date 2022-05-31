import { RiErrorWarningFill } from "react-icons/ri";

import generalStyles from "/sass/modules/_General.module.scss";

export default function DangerMessage(props) {
  return (
    <div className={`${generalStyles.alert} ${generalStyles.alert_danger}`} role="alert">
      <RiErrorWarningFill />
      <p>{props.message}</p>
    </div>
  );
}

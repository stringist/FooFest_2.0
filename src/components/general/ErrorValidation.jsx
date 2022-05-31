import { ErrorMessage } from "formik";
import { RiErrorWarningFill } from "react-icons/ri";
import generalStyles from "/sass/modules/_General.module.scss";

export default function ErrorValidation(props) {
  return (
    <div className={generalStyles.span_error}>
      <RiErrorWarningFill />
      <ErrorMessage component="span" name={props.name} className={generalStyles.error} />
    </div>
  );
}

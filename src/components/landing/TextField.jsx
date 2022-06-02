import { useState } from "react";
import { useField } from "formik";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

import loginStyles from "/sass/modules/_Login.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";
import ErrorValidation from "../general/ErrorValidation";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  const [fieldType, setfieldType] = useState(props.type);

  function toggleVisibility() {
    fieldType === "password" ? setfieldType("text") : setfieldType("password");
  }
  return (
    <div className={generalStyles.form_container}>
      <fieldset>
        <label htmlFor={field.name}>{label}</label>
        {label === "Password" && <span className={loginStyles.help}>Password must contain at least 6 characters</span>}

        {meta.touched && meta.error && <ErrorValidation name={field.name} />}
        <div className={loginStyles.inputContainer}>
          <input className={` ${meta.touched && meta.error && generalStyles.isInvalid} ${meta.touched && meta.error === undefined && generalStyles.isValid}`} {...field} name={props.name} type={fieldType} autoComplete="off" />

          {label === "Password" && fieldType === "text" ? <MdVisibilityOff onClick={toggleVisibility} /> : label === "Password" && fieldType === "password" ? <MdVisibility onClick={toggleVisibility} /> : null}
        </div>
      </fieldset>
    </div>
  );
}

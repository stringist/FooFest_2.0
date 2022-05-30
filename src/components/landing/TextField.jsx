import { useState } from "react";
import { ErrorMessage, useField } from "formik";

import loginStyles from "/sass/modules/_Login.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  const [fieldType, setfieldType] = useState(props.type);

  function toggleVisibility() {
    fieldType === "password" ? setfieldType("text") : setfieldType("password");
  }
  return (
    <div className={generalStyles.form_container}>
      <label htmlFor={field.name}>{label}</label>

      <ErrorMessage component="span" name={field.name} className={generalStyles.error} />
      <div className={loginStyles.inputContainer}>
        <input className={` ${meta.touched && meta.error && generalStyles.isInvalid} ${meta.touched && meta.error === undefined && generalStyles.isValid}`} {...field} name={props.name} type={fieldType} autoComplete="off" />

        {label === "Password" && fieldType === "text" ? <img src="/img/visibility_off.svg" onClick={toggleVisibility}></img> : label === "Password" && fieldType === "password" ? <img src="/img/visibility.svg" onClick={toggleVisibility}></img> : null}
      </div>
    </div>
  );
}

import { useState } from "react";
import { ErrorMessage, useField } from "formik";

import loginStyles from "/sass/modules/_Login.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  const [fieldType, setfieldType] = useState(props.type);

  console.log(label);
  console.log(props);
  console.log(field);

  function toggleVisibility() {
    console.log("toggle password");
    console.log(props.type);
    fieldType === "password" ? setfieldType("text") : setfieldType("password");
    console.log(props);
    console.log(fieldType);
  }
  return (
    <div className={generalStyles.form_container}>
      <label htmlFor={field.name}>{label}</label>

      <ErrorMessage component="span" name={field.name} className={generalStyles.error} />
      <div className={loginStyles.inputContainer}>
        <input className={` ${meta.touched && meta.error && generalStyles.isInvalid}`} {...field} name={props.name} type={fieldType} autoComplete="off" />
        {console.log(fieldType, label)}

        {label === "Password" && fieldType === "text" ? <p onClick={toggleVisibility}>Hide password</p> : label === "Password" && fieldType === "password" ? <p onClick={toggleVisibility}>Show password</p> : null}
      </div>
    </div>
  );
}

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import loginStyles from "/sass/modules/_Login.module.scss";

import TextField from "./TextField";
import SuccessMessage from "../general/SuccessMessage";
import DangerMessage from "../general/DangerMessage";

export default function SignInForm(props) {
  const users = ["kalle", "lasse", "paula", "peter", "klaus", "jonas"];
  const validate = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .test("", "User not found", function (value) {
        console.log(value);
        return value !== undefined ? users.includes(value.toLowerCase()) : null;
      }),

    password: Yup.string().min(6, "Password must be at least 6 charaters").required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        props.setUser(values.username);
        props.setIsLogedIn(true);
      }}
    >
      {(formik) => (
        <div className={loginStyles.card}>
          <Form>
            {console.log(formik.errors)}
            {formik.isValid === false && formik.errors && <DangerMessage message="Correct the fields mark in red" />}

            <h2>Login to your account</h2>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />

            <button className={loginStyles.sign_button} type="submit">
              Sign in
            </button>
            <button className={loginStyles.g_button}>
              <img src="/img/google-icon.png" alt="" width={20} /> Sign in with Google
            </button>
            <a href="#" className={loginStyles.forgot}>
              Forgot your password?
            </a>
            <a href="#" className={loginStyles.forgot}>
              Don't have an account yet? Sign up
            </a>
          </Form>
        </div>
      )}
    </Formik>
  );
}

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import loginStyles from "/sass/modules/_Login.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import TextField from "./TextField";

export default function SignInForm(props) {
  const validate = Yup.object({
    username: Yup.string().required("Username is required"),

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
        <div>
          <h1>Sign Up</h1>
          <Form>
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
          </Form>
        </div>
      )}
    </Formik>
  );
}

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import loginStyles from "/sass/modules/_Login.module.scss";

import TextField from "./TextField";
import SuccessMessage from "../general/SuccessMessage";
import DangerMessage from "../general/DangerMessage";

export default function SignInForm(props) {
  const users = [
    { username: "kalle", password: "kalleA123" },
    { username: "lasse", password: "lasseA123" },
    { username: "paula", password: "paulaA123" },
  ];
  let i;
  const validate = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .test("", "Username not found", function (value) {
        return value !== undefined
          ? users.find(function (user, index) {
              if (user.username === value) {
                i = index;
                return true;
              } else if (user.username.includes(value)) {
                return undefined;
              }
            })
          : null;
        // return value !== undefined ? users.includes(value.toLowerCase()) : null;
      }),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required")
      .test("", "Password and user does not match", function (value) {
        return value !== undefined
          ? users.find(function (user, index) {
              if (user.password === value) {
                if (i === index) {
                  return true;
                }
              }
            })
          : null;
        // return value !== undefined ? users.includes(value.toLowerCase()) : null;
      }),
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
      }}
    >
      {(formik) => (
        <div className={loginStyles.card}>
          {console.log(formik.values.password)}
          <Form>
            <div className={loginStyles.users}>
              <p className={loginStyles.help}>(usernames: kalle, lasse or paula)</p>
              <p>(passwords: "username" + "A123")</p>
            </div>

            {formik.touched.username && formik.touched.password && formik.errors && <DangerMessage message="Plese, correct the errors" />}

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

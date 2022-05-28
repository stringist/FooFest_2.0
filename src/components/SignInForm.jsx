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
//   return (

//     <form ref={props.formSignIn} onSubmit={logUserIn}>
//       <div className={loginStyles.login__card}>
//         <h2>Sign in to your account</h2>

//         <div className={generalStyles.form_container}>
//           <label htmlFor="username">Username</label>
//           <span>Username must be at least 5 characters long</span>
//           <span className={generalStyles.error}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
//               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//               <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
//             </svg>
//             Username must be at least 5 characters long
//           </span>
//           <input type="text" name="username" id="username" minLength={5} />
//         </div>
//         <div className={generalStyles.form_container}>
//           <label htmlFor="password">Password</label>
//           <div className={loginStyles.inputContainer}>
//             <button onClick={toggleVisibility}>{props.pswDisplayed === true ? <img src="/img/visibility.svg" alt="visibility on button" /> : <img src="/img/visibility_off.svg" alt="visibility off button" />}</button>
//             <input type="password" name="password" id="password" ref={props.psw} />
//           </div>
//         </div>
//         <button type="submit" className={loginStyles.sign_button}>
//           Sign in
//         </button>
//         <button className={loginStyles.g_button}>
//           <img src="/img/google-icon.png" alt="" width={20} /> Sign in with Google
//         </button>
//         <a href="#" className={loginStyles.forgot}>
//           Forgot your password?
//         </a>
//       </div>
//     </form>
//   );
// }

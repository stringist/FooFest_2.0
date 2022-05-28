import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import loginStyles from "/sass/modules/_Login.module.scss";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import SignInForm from "../components/SignInForm";
import UserProfile from "../components/UserProfile";

export default function Login() {
  const [user, setUser] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [pswDisplayed, setPswDisplayed] = useState(false);

  const psw = useRef();
  const formSignIn = useRef();

  return (
    <div className={loginStyles.Login}>
      <Menu />

      <HeroBanner img="/img/bands_background.png" title="Login" />

      {user === "" ? <SignInForm pswDisplayed={pswDisplayed} psw={psw} formSignIn={formSignIn} setIsLogedIn={setIsLogedIn} setUser={setUser} /> : <UserProfile user={user} />}
      <Footer />
    </div>
  );
}

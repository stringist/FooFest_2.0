import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import loginStyles from "/sass/modules/_Login.module.scss";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import SignInForm from "../components/SignInForm";
import UserProfile from "../components/UserProfile";

export default function Login(props) {
  return (
    <div className={loginStyles.Login}>
      <Menu user={props.user} />

      <HeroBanner img="/img/bands_background.png" title="Profile" />

      {props.user === "" ? <SignInForm setUser={props.setUser} /> : <UserProfile user={props.user} />}
      <Footer />
    </div>
  );
}

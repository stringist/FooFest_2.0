import { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import menuStyles from "/sass/modules/_Menu.module.scss";

export default function MenuLink(props) {
  const closeMenu = () => {
    console.log("close menu");
    props.setMenuOpen(false);
  };

  return (
    <li onClick={() => closeMenu()}>
      <Link to={props.link}>{props.title}</Link>
    </li>
  );
}
